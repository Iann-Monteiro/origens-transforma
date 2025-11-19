import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface LeadRequest {
  name: string;
  email: string;
  whatsapp: string;
  sourceSection: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const n8nWebhookUrl = Deno.env.get('N8N_WEBHOOK_URL');

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { name, email, whatsapp, sourceSection }: LeadRequest = await req.json();

    // Validate required fields
    if (!name || !email || !whatsapp || !sourceSection) {
      return new Response(
        JSON.stringify({ error: 'Todos os campos são obrigatórios' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Save lead to database
    const { data: lead, error: dbError } = await supabase
      .from('leads')
      .insert({
        name,
        email,
        whatsapp,
        source_section: sourceSection,
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      return new Response(
        JSON.stringify({ error: 'Erro ao salvar lead' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Lead saved successfully:', lead);

    // Send to n8n webhook if configured
    if (n8nWebhookUrl) {
      try {
        const webhookPayload = {
          name: lead.name,
          email: lead.email,
          whatsapp: lead.whatsapp,
          sourceSection: lead.source_section,
          createdAt: lead.created_at,
        };

        const webhookResponse = await fetch(n8nWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookPayload),
        });

        if (!webhookResponse.ok) {
          console.error('n8n webhook error:', await webhookResponse.text());
        } else {
          console.log('Lead sent to n8n successfully');
        }
      } catch (webhookError) {
        console.error('Error sending to n8n webhook:', webhookError);
        // Continue even if webhook fails - lead is already saved
      }
    }

    return new Response(
      JSON.stringify({ success: true, lead }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in submit-lead function:', error);
    return new Response(
      JSON.stringify({ error: 'Erro interno do servidor' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
};

serve(handler);

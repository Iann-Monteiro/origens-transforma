-- Create leads table for storing lead information
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  source_section TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserting leads (public access for lead capture)
CREATE POLICY "Allow public to insert leads" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading leads (for admin purposes)
CREATE POLICY "Allow public to read leads" 
ON public.leads 
FOR SELECT 
USING (true);

-- Create index on email for faster lookups
CREATE INDEX idx_leads_email ON public.leads(email);

-- Create index on created_at for sorting
CREATE INDEX idx_leads_created_at ON public.leads(created_at DESC);
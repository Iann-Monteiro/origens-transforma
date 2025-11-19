import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const Inscricao = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center space-y-6 max-w-2xl">
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
            <CheckCircle className="w-16 h-16 text-primary" />
          </div>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold text-foreground">
          Inscrição Recebida!
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground">
          Obrigado por se inscrever no Origens 2026.
        </p>
        
        <p className="text-lg text-muted-foreground max-w-lg mx-auto">
          Em breve você receberá mais informações sobre os próximos passos por e-mail e WhatsApp.
        </p>
        
        <div className="pt-6">
          <Button
            onClick={() => navigate("/")}
            size="lg"
            variant="outline"
            className="font-semibold"
          >
            Voltar para página inicial
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Inscricao;

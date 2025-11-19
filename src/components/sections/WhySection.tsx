import { Button } from "@/components/ui/button";

interface WhySectionProps {
  onOpenModal: (section: string) => void;
}

export const WhySection = ({ onOpenModal }: WhySectionProps) => {
  const challenges = [
    "Ansiedade, dependência, vícios",
    "Pressão social e emocional",
    "Falta de direção profissional",
    "Fé rasa e inconstante",
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-foreground">
          Por que o Origens existe
        </h2>
        
        <div className="space-y-6 text-center md:text-left">
          <p className="text-xl md:text-2xl font-semibold text-foreground">
            Existe uma geração crescendo sem preparo
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground">
            O Origens nasceu como resposta pra quem sente que não dá mais pra empurrar com a barriga.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 py-8">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-bg-light rounded-xl border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                </div>
                <p className="text-base md:text-lg text-foreground font-medium text-left">
                  {challenge}
                </p>
              </div>
            ))}
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground">
            Uma oportunidade de parar, ganhar força, conhecimento e maturidade para voltar mais preparado do que nunca.
          </p>
          
          <div className="flex justify-center pt-6">
            <Button
              onClick={() => onOpenModal("Por que o Origens existe")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Quero aproveitar essa oportunidade
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

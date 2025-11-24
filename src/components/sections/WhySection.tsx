import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
interface WhySectionProps {
  onOpenModal: (section: string) => void;
}
export const WhySection = ({
  onOpenModal
}: WhySectionProps) => {
  const { ref, isVisible } = useScrollAnimation();
  const challenges = ["Ansiedade, dependência, vícios", "Pressão social e emocional", "Falta de direção profissional", "Fé rasa e inconstante"];
  return <section ref={ref} className={`py-20 px-4 md:px-8 bg-background transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-foreground">
          Por que o Origens existe?        
        </h2>
        
        <div className="space-y-6">
          <p className="text-xl md:text-2xl font-semibold text-foreground text-center">
            Vimos uma geração crescendo sem preparo, e isso tem consequências graves:               
          </p>
          
          
          
          <div className="grid sm:grid-cols-2 gap-4 py-8">
            {challenges.map((challenge, index) => <div key={index} className="flex items-start gap-3 p-4 bg-bg-light rounded-xl border border-border hover:border-primary/50 transition-colors">
                <div className="flex-shrink-0 mt-1">
                  <AlertTriangle className="w-6 h-6 text-primary" strokeWidth={2} />
                </div>
                <p className="text-base md:text-lg text-foreground font-medium text-left">
                  {challenge}
                </p>
              </div>)}
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground text-center">
            O Origens nasce como uma oportunidade de parar por 20 dias e se preparar, ganhar força, conhecimento e maturidade para voltar mais forte e confiante do que&nbsp;nunca.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
          </p>
          
          <div className="flex justify-center pt-6">
            <Button onClick={() => onOpenModal("Por que o Origens existe")} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 whitespace-normal text-center leading-tight max-w-xs">
              Quero aproveitar essa oportunidade
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
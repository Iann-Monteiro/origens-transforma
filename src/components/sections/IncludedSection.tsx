import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface IncludedSectionProps {
  onOpenModal: (section: string) => void;
}

const includedItems = [
  "20 dias de hospedagem no Recanto Vida",
  "Mais de 70 refeições (café, almoço, janta e lanches)",
  "+25h de conteúdo prático com cada mentor",
  "Materiais didáticos",
  "Acesso direto aos líderes",
  "Dinâmicas e jogos em grupo",
];

export const IncludedSection = ({ onOpenModal }: IncludedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className={`py-20 px-4 md:px-8 bg-background transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">
          O que está incluso
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {includedItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-md animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" strokeWidth={3} />
                </div>
              </div>
              <p className="text-base md:text-lg text-foreground font-medium text-left leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Button
            onClick={() => onOpenModal("O que está incluso")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-6 py-7 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 whitespace-normal md:whitespace-nowrap text-center leading-tight"
          >
            Quero Participar
          </Button>
        </div>
      </div>
    </section>
  );
};

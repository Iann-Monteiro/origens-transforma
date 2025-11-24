import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface InvestmentSectionProps {
  onOpenModal: (section: string) => void;
}

export const InvestmentSection = ({ onOpenModal }: InvestmentSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className={`py-20 px-4 md:px-8 bg-bg-light transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 text-foreground">
          Investimento
        </h2>
        
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border-2 border-primary/20 max-w-2xl mx-auto">
          <div className="text-center space-y-6">
            <div className="inline-block px-6 py-2 bg-primary/10 rounded-full border border-primary">
              <span className="text-sm font-bold text-primary uppercase tracking-wide">Lote 02</span>
            </div>
            
            <div className="space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-foreground">
                6x de R$ 403,33
              </p>
              <p className="text-xl md:text-2xl text-muted-foreground">
                ou R$ 2.420,00 à vista
              </p>
            </div>
            
            <div className="py-4">
              <div className="inline-block px-6 py-3 bg-destructive/10 rounded-full border-2 border-destructive/30">
                <span className="text-base font-bold text-destructive">Apenas 55 vagas disponíveis</span>
              </div>
            </div>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto">
              O valor cobre tudo: alimentação, hospedagem, estrutura, conteúdo e acompanhamento completo.
            </p>
            
            <div className="pt-4">
              <Button
                onClick={() => onOpenModal("Investimento")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-6 py-7 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 w-full sm:w-auto whitespace-normal md:whitespace-nowrap text-center leading-tight"
              >
                Quero garantir minha vaga
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

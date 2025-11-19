import { Button } from "@/components/ui/button";

interface FinalCTASectionProps {
  onOpenModal: (section: string) => void;
}

export const FinalCTASection = ({ onOpenModal }: FinalCTASectionProps) => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-bg-light to-background">
      <div className="container max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          Mais de 100 jovens já passaram pelo Origens
        </h2>
        
        <div className="space-y-4">
          <p className="text-xl md:text-2xl text-foreground font-semibold">
            A vida adulta exige preparação, e essa é sua melhor oportunidade
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Se você sente que chegou a hora de crescer de verdade, o Origens é o lugar certo.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center py-6">
          <div className="px-6 py-3 bg-card rounded-full border-2 border-border shadow-md">
            <span className="text-base font-semibold text-foreground">11 a 31 de janeiro de 2026</span>
          </div>
          <div className="px-6 py-3 bg-card rounded-full border-2 border-border shadow-md">
            <span className="text-base font-semibold text-foreground">Recanto Vida</span>
          </div>
          <div className="px-6 py-3 bg-primary/10 rounded-full border-2 border-primary shadow-md">
            <span className="text-base font-bold text-primary">60 vagas</span>
          </div>
        </div>
        
        <div className="pt-4">
          <Button
            onClick={() => onOpenModal("CTA final")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110 animate-pulse"
          >
            Inscreva-se agora
          </Button>
        </div>
      </div>
    </section>
  );
};

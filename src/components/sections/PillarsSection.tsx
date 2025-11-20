import { Button } from "@/components/ui/button";
import { Heart, Brain, Briefcase, Users, Home } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface PillarsSectionProps {
  onOpenModal: (section: string) => void;
}

const pillars = [
  {
    image: "/9.svg",
    title: "Espiritual",
    description: "Fortalecer a fé e quebrar os ciclos de queda e inconstância",
    colorClass: "text-primary",
    bgColorClass: "bg-primary/10",
  },
  {
    image: "/10.svg",
    title: "Emocional",
    description: "Autoconhecimento, autoestima e maturidade emocional",
    colorClass: "text-brand-blue",
    bgColorClass: "bg-brand-blue/10",
  },
  {
    image: "/8.svg",
    title: "Vida Prática",
    description: "Organização, rotina doméstica e vida independente",
    colorClass: "text-brand-green",
    bgColorClass: "bg-brand-green/10",
  },
  {
    image: "/6.svg",
    title: "Empreendedorismo",
    description: "Vida profissional e como empreender do jeito certo",
    colorClass: "text-brand-magenta",
    bgColorClass: "bg-brand-magenta/10",
  },
  {
    image: "/7.svg",
    title: "Relacionamentos",
    description: "Amizades, namoro e preparação para o casamento cristão",
    colorClass: "text-brand-red",
    bgColorClass: "bg-brand-red/10",
  },
];

export const PillarsSection = ({ onOpenModal }: PillarsSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className={`py-20 px-4 md:px-8 bg-bg-light transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-foreground">
          Os 5 pilares do Origens
        </h2>
        <p className="text-lg md:text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Durante os 20 dias, os participantes são conduzidos por líderes experientes em cinco áreas fundamentais:
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-md border border-border hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-full ${pillar.bgColorClass} flex items-center justify-center mb-4 overflow-hidden`}>
  <img src={pillar.image} alt={pillar.title} className="w-8 h-8" />
</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="flex justify-center">
          <Button
            onClick={() => onOpenModal("Pilares")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-6 py-7 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 whitespace-normal md:whitespace-nowrap text-center leading-tight"
          >
            Preciso viver isso
          </Button>
        </div>
      </div>
    </section>
  );
};

import { Button } from "@/components/ui/button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onOpenModal: (section: string) => void;
}

export const HeroSection = ({ onOpenModal }: HeroSectionProps) => {
  return (
    <AuroraBackground className="min-h-[75vh] md:min-h-[85vh]">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="container max-w-6xl mx-auto relative z-10 px-4 md:px-8"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-foreground">
              20 dias que transformam seus próximos 20 anos
            </h1>
            <p className="text-xl md:text-2xl font-medium">
              <span className="bg-primary text-white rounded px-1 py-0 box-decoration-clone leading-snug">
                Imersão para jovens cristãos que buscam propósito e direção
              </span>
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <div className="px-4 py-2 bg-bg-light rounded-full border border-border">
                <span className="text-sm font-semibold text-foreground">11 a 31 de janeiro de 2026</span>
              </div>
              <div className="px-4 py-2 bg-bg-light rounded-full border border-border">
                <span className="text-sm font-semibold text-foreground">Pato Branco</span>
              </div>
              <div className="px-4 py-2 bg-primary/10 rounded-full border border-primary">
                <span className="text-sm font-semibold text-primary">Apenas 60 vagas</span>
              </div>
            </div>
            <div className="pt-4">
              <Button
                onClick={() => onOpenModal("Hero")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Quero participar
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative">
              <div className="w-full h-[500px] bg-gradient-to-br from-bg-light to-muted rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center space-y-4 p-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full border-8 border-primary" />
                  </div>
                  <p className="text-muted-foreground italic">Placeholder para imagem de jovens em movimento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

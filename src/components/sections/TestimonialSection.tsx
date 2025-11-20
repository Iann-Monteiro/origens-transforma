import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const testimonials = [
  {
    quote: "Minha vida está dividida entre antes e depois do Origens.\n\nTive uma evolução muito grande e amadureci muito através da imersão.\n\nMinhas decisões e meu caminho também ficaram mais claros.",
    author: "Jefete, 19 anos",
    image: "/jefete.jpg",
  },
  {
    quote: "Criei raízes no Senhor e adquiri ferramentas que moldaram minha conduta de vida.\n\nFui impulsionado profissional e ministerialmente, e hoje exerço cargos de liderança.\n\nFoi no Origens que conheci minha noiva.",
    author: "Rodrigo, 19 anos",
        image: "/digas.jpg",
  },
  {
    quote: "Foi um tempo de amadurecimento, onde aprendi a me conhecer em Deus e enxergar a vida com mais propósito.\n\nCaminho com mais firmeza, fé e clareza sobre quem sou e pra onde quero ir.",
    author: "Maria Fernanda, 20 anos",
    image: "/maria.jpg",
  },
  {
    quote: "Foi um divisor de águas na minha vida.\n\nViajo mais de 1.000 km só para participar, porque vale cada segundo.\n\nTodos deveriam viver essa experiência e enxergar o mundo de uma nova forma.",
    author: "Enzo, 16 anos",
    image: "/naosei.jpg",
  },
];

export const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section ref={ref} className={`py-8 md:py-16 px-4 md:px-8 bg-bg-light transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Quem viveu, não voltou igual
        </h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border max-w-3xl mx-auto">
                    <div className="flex flex-col items-center text-center space-y-6">
  <div className="w-24 h-24 rounded-full bg-muted border-4 border-primary flex items-center justify-center overflow-hidden">
    <img
      src={testimonial.image}
      alt={`Foto de ${testimonial.author}`}
      className="w-full h-full object-cover"
    />
  </div>
  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed whitespace-pre-line">
    "{testimonial.quote}"
  </blockquote>
  <cite className="text-base md:text-lg font-semibold text-primary not-italic">
    — {testimonial.author}
  </cite>
</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              onClick={goToPrevious}
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 border-2"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            {/* Dots indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? "bg-primary w-8" 
                      : "bg-muted hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={goToNext}
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 border-2"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

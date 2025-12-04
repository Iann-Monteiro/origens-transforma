import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HistorySectionProps {
  onOpenModal: (section: string) => void;
}

const images = [
  { src: "/imersao-2022.jpg", year: "2022" },
  { src: "/imersao-2023.jpg", year: "2023" },
  { src: "/imersao-2024.jpg", year: "2024" },
  { src: "/imersao-2025.jpg", year: "2025" },
];

export const HistorySection = ({ onOpenModal }: HistorySectionProps) => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      ref={ref}
      className={`py-12 md:py-16 px-4 bg-background transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          4 imersões e mais de 110 jovens.
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          A cada ano o Senhor transformou vidas e destinos
        </p>

        {/* Carousel */}
        <div className="relative mb-8">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={image.src}
                    alt={`Imersão Origens ${image.year}`}
                    className="w-full h-auto object-contain rounded-2xl"
                  />
                  <p className="mt-3 text-sm text-muted-foreground font-medium">
                    Origens {image.year}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full shadow-lg transition-all"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full shadow-lg transition-all"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-primary w-6"
                  : "bg-muted-foreground/30"
              }`}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>

        <Button
          onClick={() => onOpenModal("history")}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full"
        >
          Quero participar
        </Button>
      </div>
    </section>
  );
};

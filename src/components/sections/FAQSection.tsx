import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const faqs = [
  {
    question: "A partir de qual idade é possível participar?",
    answer: "A partir de 16 anos já é permitido participar, com idade limite de 23 anos.",
  },
  {
    question: "Qual é a data da imersão?",
    answer: "11 a 31 de janeiro de 2026",
  },
  {
    question: "Qual é a igreja responsável?",
    answer: "Comunidade Cristã Vida Para os Povos, pastoreada pelo Pr. Giuliano Batiston e pela Pra. Débora Batiston.",
  },
  {
    question: "Qual é o WhatsApp de contato oficial?",
    answer: "Entre em contato em nosso WhatsApp (46) 99128-3559.",
  },
  {
    question: "Onde acontece a imersão?",
    answer: "Na chácara da Comunidade Vida, o \"Recanto Vida\", em Pato Branco, Paraná. Você pode conferir detalhes no link do Google Maps: https://share.google/r1XWLigjX119WW08M",
  },
  {
    question: "Sou pastor/líder e gostaria de levar vários jovens da minha igreja.",
    answer: "Por favor, entre em contato com o Douglas Batista, responsável pelo ministério Origens, no WhatsApp (46) 8403-3711, para conversar sobre logística e condições especiais.",
  },
];

export const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className={`py-20 px-4 md:px-8 bg-background transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Perguntas frequentes
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground hover:text-primary py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

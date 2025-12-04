import { useState } from "react";
import { LeadCaptureModal } from "@/components/LeadCaptureModal";
import { HeroSection } from "@/components/sections/HeroSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { WhySection } from "@/components/sections/WhySection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { IncludedSection } from "@/components/sections/IncludedSection";
import { InvestmentSection } from "@/components/sections/InvestmentSection";
import { HistorySection } from "@/components/sections/HistorySection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState("");

  const handleOpenModal = (section: string) => {
    setModalSource(section);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onOpenModal={handleOpenModal} />
      <TestimonialSection />
      <WhySection onOpenModal={handleOpenModal} />
      <PillarsSection onOpenModal={handleOpenModal} />
      <IncludedSection onOpenModal={handleOpenModal} />
      <InvestmentSection onOpenModal={handleOpenModal} />
      <HistorySection onOpenModal={handleOpenModal} />
      <FAQSection />
      <FinalCTASection onOpenModal={handleOpenModal} />
      <Footer />
      
      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        sourceSection={modalSource}
      />
    </div>
  );
};

export default Index;

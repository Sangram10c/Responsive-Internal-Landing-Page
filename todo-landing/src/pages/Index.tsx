import { useState, useCallback } from "react";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { BrandLogos } from "../components/BrandLogos";
import { FeaturesSection } from "../components/FeaturesSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { CTASection } from "../components/CTASection";
import { Footer } from "../components/Footer";
import { StartOrganizingForm } from "../components/StartOrganizingForm";
import type { FormData } from "../components/StartOrganizingForm";
import { ThankYouPopup } from "../components/ThankYouPopup";
import { SubmissionsTable } from "../components/SubmissionsTable";
import type { Submission } from "../components/SubmissionsTable";

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  const handleStartOrganizing = useCallback(() => {
    setIsFormOpen(true);
  }, []);

  const handleFormSubmit = useCallback((data: FormData) => {
    const newSubmission: Submission = {
      id: crypto.randomUUID(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      timestamp: new Date(),
    };

    setSubmissions((prev) => [newSubmission, ...prev]);
    setIsFormOpen(false);
    setIsThankYouOpen(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header onStartOrganizing={handleStartOrganizing} />
      
      <main>
        <HeroSection onStartOrganizing={handleStartOrganizing} />
        <BrandLogos />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
        <SubmissionsTable submissions={submissions} />
      </main>

      <Footer />

      {/* Modals */}
      <StartOrganizingForm
        open={isFormOpen}
        onOpenChange={setIsFormOpen}
        onSubmit={handleFormSubmit}
      />
      <ThankYouPopup
        open={isThankYouOpen}
        onOpenChange={setIsThankYouOpen}
      />
    </div>
  );
};

export default Index;

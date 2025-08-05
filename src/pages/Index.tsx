
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import CatalogSection from "@/components/CatalogSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-zents-purple-50 to-zents-orange-50">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <AboutSection />
      <FeaturesSection />
      <CatalogSection />
      <PricingSection />
      <TestimonialsSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

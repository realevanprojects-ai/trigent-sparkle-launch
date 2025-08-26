import HeroSection from "@/components/HeroSection";
import AgentsSection from "@/components/AgentsSection";
import TrustSection from "@/components/TrustSection";
import ResultsSection from "@/components/ResultsSection";
import IndustriesSection from "@/components/IndustriesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DemoSection from "@/components/DemoSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AgentsSection />
      <TrustSection />
      <ResultsSection />
      <IndustriesSection />
      <HowItWorksSection />
      <DemoSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;

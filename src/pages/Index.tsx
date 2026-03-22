import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import CompanionDeviceSection from "@/components/landing/CompanionDeviceSection";
import InteractiveDemoSection from "@/components/landing/InteractiveDemoSection";
import { PerformanceReport } from "@/components/landing/PerformanceReport";
import LeaderboardSection from "@/components/landing/LeaderboardSection";
import StreakSection from "@/components/landing/StreakSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <div id="features">
        <FeaturesGrid />
      </div>
      <div id="device">
        <CompanionDeviceSection />
      </div>
      <InteractiveDemoSection />
      <PerformanceReport />
      <LeaderboardSection />
      <StreakSection />
      <TestimonialsSection />
      <div id="pricing">
        <PricingSection />
      </div>
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;

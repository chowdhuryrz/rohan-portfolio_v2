import { Hero } from "./Hero";
import { RightContent } from "./RightContent";
import { FingerprintBackground } from "./FingerprintBackground";

export const PortfolioLayout = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <FingerprintBackground />
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <Hero />
        <RightContent />
      </div>
    </div>
  );
};

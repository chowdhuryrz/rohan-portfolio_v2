import { Hero } from "./Hero";
import { RightContent } from "./RightContent";
import { FingerprintBackground } from "./FingerprintBackground";
import ErrorBoundary from "@/components/ErrorBoundary";

export const PortfolioLayout = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <FingerprintBackground />
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <Hero />
          <RightContent />
        </div>
      </div>
    </ErrorBoundary>
  );
};

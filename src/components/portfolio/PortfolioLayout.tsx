import { Hero } from "./Hero";
import { RightContent } from "./RightContent";
import ErrorBoundary from "@/components/ErrorBoundary";

export const PortfolioLayout = () => {
  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <Hero />
          <RightContent />
        </div>
      </div>
    </ErrorBoundary>
  );
};

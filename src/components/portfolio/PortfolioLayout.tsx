import { useState, useEffect } from "react";
import { LeftSidebar } from "./LeftSidebar";
import { RightContent } from "./RightContent";
import { MobileNav } from "./MobileNav";
import { MobileHeader } from "./MobileHeader";
import {
  NAVIGATION_ITEMS,
  NAVIGATION_OFFSET,
  SCROLL_THRESHOLD,
} from "@/config/constants";
import ErrorBoundary from "@/components/ErrorBoundary";

export const PortfolioLayout = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAVIGATION_ITEMS.map((item) => item.id);
      const scrollPosition = window.scrollY + SCROLL_THRESHOLD;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);

        if (element) {
          const sectionTop = element.offsetTop - NAVIGATION_OFFSET;
          const sectionBottom = element.offsetTop + element.offsetHeight;

          if (i === sections.length - 1) {
            const documentHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;
            const isNearBottom =
              scrollPosition + windowHeight >= documentHeight - 100;

            if (scrollPosition >= sectionTop || isNearBottom) {
              setActiveSection(sectionId);
              break;
            }
          } else if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionBottom
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - NAVIGATION_OFFSET;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <MobileNav activeSection={activeSection} onNavigate={handleNavigate} />
        <MobileHeader />

        <div className="max-w-[1200px] mx-auto px-0 xl:px-6">
          <div className="lg:grid-cols-1 xl:grid xl:grid-cols-2 xl:gap-x-4 xl:items-start">
            <LeftSidebar
              activeSection={activeSection}
              onNavigate={handleNavigate}
            />
            <RightContent />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

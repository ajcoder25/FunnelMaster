import React from "react";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";

function FeaturesSectionWithHoverEffectsDemo() {
  return (
    <div className="min-h-screen w-full bg-[#020203]">
      <div className="absolute top-0 left-0 w-full">
        <FeaturesSectionWithHoverEffects />
      </div>
    </div>
  );
}

export { FeaturesSectionWithHoverEffectsDemo };

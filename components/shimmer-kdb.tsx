"use client";

import ShimmerButton from "@/components/ui/shimmer-button";
import { track } from "@vercel/analytics/react";

export function ShimmerButtonDemo() {
  const handleTrackClick = () => {
    // Perform the tracking
    track("Clicked KDB.AI", { button: "KDB.AI" });
    // Navigate to the new page
    window.open('https://kdb.ai', '_blank');
  };

  return (
    <div className="z-10 mt-4 flex items-center justify-center" onClick={handleTrackClick}>
      <ShimmerButton className="shadow-2xl py-2 px-2">
        <span className="whitespace-pre-wrap text-center text-xxs font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
          <span className="text-white">
            Powered by
            <span className="text-[#FFD700]">{" "}KDB.AI</span>
          </span>
        </span>
      </ShimmerButton>
    </div>
  );
}
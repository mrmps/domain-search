import * as React from "react";
import SquareTextarea from "@/components/square-textarea";
import ExampleComponent from "@/components/examples";
import { ShimmerButtonDemo } from "@/components/shimmer-kdb";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 pt-40 sm:pt-64">
      <div className="mb-10 flex items-center justify-center pb-xs md:text-center">
        <div className="default font-sans text-base text-textMain dark:text-textMainDark selection:bg-super/50 selection:text-textMain dark:selection:bg-superDuper/10 dark:selection:text-superDark">
          <span className="font-regular font-display text-4xl">
            Search Brandable Domain Names
          </span>
        </div>
      </div>
      <SquareTextarea />
      <ShimmerButtonDemo />
      <ExampleComponent />
    </main>
  );
}

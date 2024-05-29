import * as React from "react";
import NavBar from "@/components/nav-bar";
import SquareTextarea from "@/components/square-textarea";
import ExampleComponent from "@/components/examples";
import ShimmerButton from "@/components/ui/shimmer-button";

function ShimmerButtonDemo() {
  return (
    <a href="https://kdb.ai" target="_blank" rel="noopener noreferrer">
      <div className="z-10 mt-4 flex items-center justify-center">
        <ShimmerButton className="shadow-2xl py-2 px-2">
          <span className="whitespace-pre-wrap text-center text-xxs font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
            <span className="text-white">
              Powered by
              <span className="text-[#FFD700]">{" "}KDB.AI</span>
            </span>
          </span>
        </ShimmerButton>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 pt-40 sm:pt-64">
      <NavBar />
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

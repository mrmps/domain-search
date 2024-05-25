import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const CardSkeleton: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <li
          key={i}
          className="group relative flex cursor-pointer gap-x-2 rounded-2xl border p-5 bg-white xl:w-[800px] xl:h-[280px]"
          style={{ opacity: 1 }}
        >
          <div className="relative w-full">
            <div className="h-full w-full gap-x-4 transition-all duration-300">
              <section className="flex h-full flex-col justify-between gap-3">
                <section className="flex flex-col gap-3">
                  <div className="flex">
                    <div className="flex max-w-full flex-1 items-center">
                      <div className="flex flex-1 items-center gap-2 truncate">
                        <span className="relative inline-block flex-none overflow-hidden border border-gray-300 rounded-xl bg-white h-12 min-w-12 max-w-12 w-12">
                          <Skeleton className="h-full w-full" />
                        </span>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center truncate">
                              <div className="flex flex-col">
                                <Skeleton className="h-4 w-20 bg-gray-300 rounded" />
                              </div>
                              <div className="ml-2 flex flex-col border-l border-l-gray-700 pl-2">
                                <Skeleton className="h-4 w-20 bg-gray-300 rounded" />
                              </div>
                              <div className="ml-2 flex flex-col border-l border-l-gray-700 pl-2">
                                <Skeleton className="h-4 w-20 bg-gray-300 rounded" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="relative ml-2 flex w-fit flex-none overflow-hidden whitespace-nowrap rounded-xl px-2 py-1.5 text-left text-sm font-semibold text-white shadow-none outline-none ring-0 transition-all focus:border-none focus:outline-none disabled:border  disabled:bg-transparent disabled:text-transparent md:w-[105px] md:px-3 md:py-2">
                        <Skeleton className="h-4 w-24 bg-gray-300 rounded" />
                      </div>
                    </div>
                  </div>
                  <p className="mb-0 min-h-[10px] whitespace-pre-wrap text-sm text-gray-600">
                    <Skeleton className="h-4 w-full bg-gray-300 rounded" />
                  </p>
                </section>
                <section className="flex items-start justify-between">
                  <section className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-4 w-24 bg-gray-300 rounded" />
                    </div>
                    <div className="flex max-h-[30px] w-full flex-wrap items-center gap-2 overflow-hidden">
                      <Skeleton className="h-4 w-1/4 bg-gray-300 rounded" />
                    </div>
                  </section>
                  <section className="flex flex-col justify-end gap-2">
                    <Skeleton className="h-4 w-1/4 bg-gray-300 rounded" />
                    <div className="flex items-center justify-end gap-2">
                      <Skeleton className="h-4 w-1/4 bg-gray-300 rounded" />
                    </div>
                  </section>
                </section>
              </section>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};
export default CardSkeleton;

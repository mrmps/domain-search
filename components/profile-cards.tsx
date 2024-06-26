import React from "react";
import { getDomains } from "@/lib/getDomains";
import { Skeleton } from "./ui/skeleton";
import Image from "next/image";
import { track } from "@vercel/analytics/server";
import DomainCard from "./domain-card";

export type DomainInfo = {
  image_url: string;
  domain: string;
  price: number;
};

const DomainCardSkeleton = () => (
  <div className="group block w-full">
    <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-stone-200 bg-white shadow-md transition-all hover:shadow-lg">
      <div className="w-full" style={{ aspectRatio: "500 / 300" }}>
        <Skeleton className="h-full w-full object-cover" />
      </div>
      <div className="w-full p-4 border-t border-stone-200">
        <div className="flex justify-between items-center">
          <Skeleton className="h-4 w-20 bg-gray-300 rounded mr-56 sm:mr-20" />
          <Skeleton className="h-4 w-20 bg-gray-300 rounded" />
        </div>
      </div>
    </div>
  </div>
);

export const MultipleDomainCardSkeletons: React.FC<{ count: number }> = ({
  count,
}) => (
  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
    {Array.from({ length: count }, (_, index) => (
      <DomainCardSkeleton key={index} />
    ))}
  </ul>
);


const DomainsListWithSuspense: React.FC<{ searchQuery: string }> = async ({
  searchQuery,
}) => {
  let domains = await getDomains(searchQuery);
  // remove duplicates
  domains = domains.filter(
    (domainInfo: DomainInfo, index: number, self: DomainInfo[]) =>
      index ===
      self.findIndex((t: DomainInfo) => t.domain === domainInfo.domain)
  );

  return (
    <ul className="grid grid-cols-1 md:grid-cols-5 gap-6 md:mx-20">
      {domains.map((domainInfo: DomainInfo, index: number) => (
        <DomainCard
          key={`${domainInfo.domain}_${index}`}
          domainInfo={domainInfo}
        />
      ))}
    </ul>
  );
};

export default DomainsListWithSuspense;

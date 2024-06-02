"use client";

import Image from "next/image";
import { DomainInfo } from "./profile-cards";
import { track } from "@vercel/analytics/react";

const DomainCard: React.FC<{ domainInfo: DomainInfo }> = ({ domainInfo }) => {

  const handleTrackClick = () => {
    // Perform the tracking
    track("Clicked Domain Card", { domain: domainInfo.domain });
    // Navigate to the new domain card
    window.open(`http://${domainInfo.domain}`, '_blank');
  };

  return (
    <div onClick={handleTrackClick} className="group block w-full cursor-pointer">
      <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-xl border border-stone-200 bg-white shadow-md transition-all hover:shadow-lg">
        <div
          className="w-full"
          style={{
            aspectRatio: "500 / 300",
            overflow: "visible",
            backgroundColor: "rgb(2, 33, 38)",
          }}
        >
          <Image
            src={domainInfo.image_url}
            alt={domainInfo.domain}
            width={500}
            height={300}
          />
        </div>
        <div className="w-full p-4 border-t border-stone-200">
          <div className="flex justify-between items-center">
            <h3 className="text-sm text-stone-500 transition-colors group-hover:text-black truncate m-0">
              {domainInfo.domain}
            </h3>
            <span className="text-sm text-stone-500 transition-colors group-hover:text-black">
              ${domainInfo.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainCard;

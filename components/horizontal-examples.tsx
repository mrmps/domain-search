import React from "react";

const HorizontalExamples = () => {
  const examples = [
    { icon: "🔍", shortDescription: "Domain Name Search Engine", longDescription: "A powerful tool designed to help entrepreneurs and businesses find the perfect domain name for their brand, leveraging advanced search algorithms and comprehensive databases." },
    { icon: "🌿", shortDescription: "Enterprise Greening Urban Spaces", longDescription: "A social enterprise that transforms unused city spaces into thriving community gardens and green areas, promoting sustainability and local engagement." },
    { icon: "💡", shortDescription: "Firm Lighting the Way in Renewable Energy", longDescription: "A tech firm pioneering in solar-powered lighting solutions for public and private spaces, reducing carbon footprints and leading the charge towards a sustainable future." },
    { icon: "💞", shortDescription: "Revolutionary Dating Platform", longDescription: "A groundbreaking platform transforming the dating scene with advanced matching algorithms, creating meaningful connections and unforgettable experiences." },
  ];

  return (
    <div className="mt-8 w-full mx-auto flex justify-center">
      <div className="flex flex-row gap-2 overflow-x-auto md:gap-3">
        {examples.map((example, index) => (
          <a
            key={index}
            href={`/search?q=${encodeURIComponent(example.longDescription)}`}
            className="group flex-shrink-0 flex cursor-pointer items-center gap-4 rounded-lg border p-1 border-gray-200 ring-gray-200 divide-gray-200 transition duration-300 bg-transparent hover:bg-[#DFDFCE]/50 md:gap-6 md:p-2"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-md p-2 transition-all duration-200 hover:bg-transparent border-gray-200 ring-gray-200 divide-gray-200 bg-[#DFDFCE]/50 md:h-10 md:w-10 md:p-2">
              <div className="text-base text-black">{example.icon}</div>
            </div>
            <div className="text-sm font-medium text-black md:text-md">
              {example.shortDescription}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HorizontalExamples;

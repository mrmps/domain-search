import React from "react";

const ExampleComponent = () => {
  const examples = [
    { 
      icon: "🔍", 
      shortDescription: "Domain Name Search Engine", 
      longDescription: "A powerful tool designed to help entrepreneurs and businesses find the perfect domain name for their brand, leveraging advanced search algorithms and comprehensive databases." 
    },
    { 
      icon: "🌿", 
      shortDescription: "Enterprise greening urban spaces", 
      longDescription: "A social enterprise that transforms unused city spaces into thriving community gardens and green areas, promoting sustainability and local engagement." 
    },
    { 
      icon: "💡", 
      shortDescription: "Firm lighting the way in renewable energy", 
      longDescription: "A tech firm pioneering in solar-powered lighting solutions for public and private spaces, reducing carbon footprints and leading the charge towards a sustainable future." 
    },
    { 
      icon: "💞", 
      shortDescription: "Revolutionary dating platform", 
      longDescription: "A groundbreaking platform transforming the dating scene with advanced matching algorithms, creating meaningful connections and unforgettable experiences." 
    },
  ];

  return (
    <div className="mt-4 w-full max-w-2xl">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {examples.map((example, index) => (
          <a
            key={index}
            href={`/search?q=${encodeURIComponent(example.longDescription)}`}
            className="group col-span-1 flex cursor-pointer items-center gap-4 rounded-lg border p-1 border-gray-200 ring-gray-200 divide-gray-200 transition duration-300 bg-transparent hover:bg-[#DFDFCE]/50"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-md p-2 transition-all duration-200 hover:bg-transparent border-gray-200 ring-gray-200 divide-gray-200 bg-[#DFDFCE]/50">
              <div className="text-base text-black">{example.icon}</div>
            </div>
            <div className="text-sm font-medium text-black">
              {example.shortDescription}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExampleComponent;

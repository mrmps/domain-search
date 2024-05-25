import React from "react";

const HorizontalExamples = () => {
  const examples = [
    { icon: "🚴‍♀️", text: "How to choose a track bike?" },
    { icon: "🐝", text: "Urban beekeeping guide" },
    { icon: "🦉", text: "Why are owls associated with wisdom?" },
    { icon: "🪑", text: "The most iconic chairs" },
    { icon: "🦋", text: "The most iconic flowers" },
    { icon: "🦋", text: "The most iconic flowers" },
  ];

  return (
    <div className="mt-8 w-full mx-auto flex justify-center">
      <div className="flex flex-row gap-2 overflow-x-auto md:gap-3">
        {examples.map((example, index) => (
          <div
            key={index}
            className="group flex-shrink-0 flex cursor-pointer items-center gap-4 rounded-lg border p-1 border-gray-200 ring-gray-200 divide-gray-200 transition duration-300 bg-transparent hover:bg-[#DFDFCE]/50 md:gap-6 md:p-2"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-md p-2 transition-all duration-200 hover:bg-transparent border-gray-200 ring-gray-200 divide-gray-200 bg-[#DFDFCE]/50 md:h-10 md:w-10 md:p-2">
              <div className="text-base text-black">{example.icon}</div>
            </div>
            <div className="text-sm font-medium text-black md:text-md">
              {example.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalExamples;

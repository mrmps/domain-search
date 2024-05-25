import React from "react";

const ExampleComponent = () => {
  const examples = [
    { icon: "🚴‍♀️", text: "How to choose a track bike?" },
    { icon: "🐝", text: "Urban beekeeping guide" },
    { icon: "🦉", text: "Why are owls associated with wisdom?" },
    { icon: "🪑", text: "The most iconic chairs" },
  ];

  return (
    <div className="mt-4 w-full max-w-2xl">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        {examples.map((example, index) => (
          <div
            key={index}
            className="group col-span-1 flex cursor-pointer items-center gap-4 rounded-lg border p-1 border-gray-200 ring-gray-200 divide-gray-200 transition duration-300 bg-transparent hover:bg-[#DFDFCE]/50"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-md p-2 transition-all duration-200 hover:bg-transparent border-gray-200 ring-gray-200 divide-gray-200 bg-[#DFDFCE]/50">
              <div className="text-base text-black">{example.icon}</div>
            </div>
            <div className="text-sm font-medium  text-black">
              {example.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExampleComponent;

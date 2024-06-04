import React from "react";
import { quantum } from "ldrs";

quantum.register();

// Default values shown

const Loader = () => {
  return (
    <main className="absolute inset-0 bg-black min-h-screen h-full flex flex-col gap-10 justify-center items-center z-50 bg-opacity-90">
      <div>
        <l-quantum size="150" speed="1.75" color="#87ceeb"></l-quantum>
      </div>
    </main>
  );
};

export default Loader;

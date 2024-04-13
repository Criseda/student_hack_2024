"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
  return (
    <div className="h-screen w-screen bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 flex flex-col h-full items-center">
        <div className="flex-grow" />
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-blue-400 blue to-purple-500 text-center font-sans font-bold">
          Stellar Explorers
        </h1>
        <div className="flex-grow"></div>
        <p className="text-center text-white text-lg pb-10 text-transparent font-sans">
          Explore our Solar system below
        </p>
        <FontAwesomeIcon
          icon={faArrowDown}
          className="text-white text-2xl w-6 h-6 pb-3"
          bounce
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}
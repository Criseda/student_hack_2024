"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function HomePage() {
    return (
      <div className="h-screen w-screen bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Welcome to app
          </h1>
        </div>
        <BackgroundBeams />
      </div>
    );
  }
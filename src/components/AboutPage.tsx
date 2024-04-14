"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function AboutPage() {
  return (
    <div className=" w-screen bg-neutral-950 relative antialiased">
      <div className="p-4">
        <h1 className="text-6xl text-center text-neutral-200 font-bold mt-8 mb-4">
          About Page 
        </h1> 
      </div>
      <BackgroundBeams />
    </div>
  );
}


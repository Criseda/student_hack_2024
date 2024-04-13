"use client";
import { useEffect } from "react";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import Planets from "@/components/Planets";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="relative w-screen overflow-hidden">
          <Navbar />
          <HomePage />
          <Planets />
      </div>
    </>
  );
}

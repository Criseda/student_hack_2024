"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Meteors } from "@/components/ui/meteors"

const planets = [
  { name: "sun", scale: 3, fileType: "svg", info: "The sun is something"},
  { name: "mercury", scale: 0.7, fileType: "png" , info: "Mercury is something"},
  { name: "venus", scale: 0.96, fileType: "svg", info: "Venus sun is something" },
  { name: "earth", scale: 1, fileType: "svg", info: "Earth sun is something" },
  { name: "mars", scale: 0.8, fileType: "svg", info: "Mars sun is something" },
  { name: "jupiter", scale: 2, fileType: "svg", info: "Jupiter sun is something" },
  { name: "saturn", scale: 1.5, fileType: "svg", info: "Saturn sun is something" },
  { name: "uranus", scale: 1.25, fileType: "svg", info: "Uranus sun is something" },
  { name: "neptune", scale: 1.2, fileType: "svg" , info: "Neptune sun is something"},
];

const baseSize = 100;

type PlanetProps = {
  planet: {
    name: string;
    scale: number;
    fileType: string;
  };
};

function Planet({ planet, index }: PlanetProps & { index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [initialX, setInitialX] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setInitialX(window.innerWidth - 200);
    }

    const handleResize = () => {
      setInitialX(window.innerWidth - 200);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [index]);

  return (
    <Link href={`/${planet.name}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: initialX }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : initialX }}
        transition={{ duration: 1 }}
      >
        <Image
          src={`/images/${planet.name}.${planet.fileType}`}
          alt={planet.name}
          width={baseSize * planet.scale}
          height={baseSize * planet.scale}
        />
      </motion.div>
    </Link>
  );
}

function Info({ planet, index }: PlanetProps & { index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [initialX, setInitialX] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setInitialX(window.innerWidth - 500);
    }

    const handleResize = () => {
      setInitialX(window.innerWidth - 500);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [index]);

  return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: initialX }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 200 : initialX }}
        transition={{ duration: 1 }}
      >
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" /> 
      <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
        <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            Meteors because they&apos;re cool
        </h1>
 
        <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            I don&apos;t know what to write so I&apos;ll just paste something
            cool here. One more sentence because lorem ipsum is just
            unacceptable. Won&apos;t ChatGPT the shit out of this.
        </p> 
        <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            Take Quiz
        </button> 
      <Meteors number={20} />   
      </div> 
      </motion.div> 
    
  );
}




export default function Planets() {
  return (
    <div className="h-auto w-screen flex justify-start items-center overflow-hidden">
      <div className="flex flex-col items-center space-y-20 pt-5">
        {planets.map((planet, index) => (
          <div className="h-screen flex items-center" key={planet.name}>
            <Planet planet={planet} index={index} />
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center space-y-20 pt-5">
        {planets.map((planet, index) => (
          <div className="h-screen flex items-center" key={planet.name}>
            <Info planet={planet} index={index} />
          </div>
        ))}
      </div>
  </div>
  );
}

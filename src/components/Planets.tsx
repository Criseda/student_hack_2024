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

  const [key, setKey] = useState(Math.random());
  const [initialX, setInitialX] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setInitialX(
        index % 2 === 0 ? -window.innerWidth / 2 : window.innerWidth / 2
      );
    }

    const handleResize = () => {
      setInitialX(
        index % 2 === 0 ? -window.innerWidth / 2 : window.innerWidth / 2
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [index]);

  return (
    <Link href={`/${planet.name}`} passHref key={key}>
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

export default function Planets() {
  return (
    <div className="h-auto w-screen flex justify-center items-center">
      <div className="flex flex-col items-center space-y-20 pt-5">
        {planets.map((planet, index) => (
          <div className="h-screen flex items-center" key={planet.name}>
            <Planet planet={planet} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}

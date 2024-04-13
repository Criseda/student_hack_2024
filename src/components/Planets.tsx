"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const planets = [
  { name: "sun", scale: 3, fileType: "svg" },
  { name: "mercury", scale: 0.7, fileType: "png" },
  { name: "venus", scale: 0.96, fileType: "svg" },
  { name: "earth", scale: 1, fileType: "svg" },
  { name: "mars", scale: 0.8, fileType: "svg" },
  { name: "jupiter", scale: 2, fileType: "svg" },
  { name: "saturn", scale: 1.5, fileType: "svg" },
  { name: "uranus", scale: 1.25, fileType: "svg" },
  { name: "neptune", scale: 1.2, fileType: "svg" },
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

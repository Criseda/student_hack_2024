"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
import { Meteors } from "@/components/ui/meteors";
import { SunQuiz } from "@/components/Quizes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const planets = [
  { name: "sun", scale: 4, fileType: "svg", info: "The sun is something" },
  { name: "mercury", scale: 4, fileType: "png", info: "Mercury is something" },
  { name: "venus", scale: 4, fileType: "svg", info: "Venus sun is something" },
  { name: "earth", scale: 4, fileType: "svg", info: "Earth sun is something" },
  { name: "mars", scale: 4, fileType: "svg", info: "Mars sun is something" },
  {
    name: "jupiter",
    scale: 4,
    fileType: "svg",
    info: "Jupiter sun is something",
  },
  {
    name: "saturn",
    scale: 4,
    fileType: "svg",
    info: "Saturn sun is something",
  },
  {
    name: "uranus",
    scale: 4,
    fileType: "svg",
    info: "Uranus sun is something",
  },
  {
    name: "neptune",
    scale: 4,
    fileType: "svg",
    info: "Neptune sun is something",
  },
];

const planetsInfo = [
  {
    name: "The Sun",
    info: "Hi there! I'm the Sun, the star at the center of our solar system! I'm super hot and bright, and I give light and warmth to all the planets. Without me, there would be no life on Earth! So, I'm kind of a big deal.",
  },
  {
    name: "Mercury",
    info: "Mercury is the closest planet to the Sun, so it's super hot! It's like an oven, with temperatures that could melt chocolate in no time. Despite being small, it's speedy, zooming around the Sun faster than any other planet! Venus ♀",
  },
  {
    name: "Venus",
    info: "Venus is like Earth's twin sister, but don't let its beauty fool you! It's the hottest planet in our solar system because of its thick, cloudy atmosphere. If you ever visit Venus, don't forget your sunscreen—those clouds won't protect you from the sizzling heat! Earth 🌍 ",
  },
  {
    name: "Earth",
    info: "Hey, that's where we live! Earth is just right for us—neither too hot nor too cold. It's covered in oceans, forests, deserts, and cities. Plus, it's the only planet with yummy things like ice cream and pizza!",
  },
  {
    name: "Mars",
    info: "Mars is often called the Red Planet because of its rusty color. It's like a giant sandbox in space! Scientists think there might be water there, and some dream of living on Mars one day. Maybe we'll have space colonies with Martian gardens",
  },
  {
    name: "Jupiter",
    info: "Saturn is famous for its beautiful rings, like a cosmic hula hoop! Imagine being able to ice skate around them. It's also a gas giant, which means you wouldn't find solid ground to stand on. Just floating in the clouds, watching the rings spin!",
  },
  {
    name: "Saturn",
    info: "Saturn is famous for its beautiful rings, like a cosmic hula hoop! Imagine being able to ice skate around them. It's also a gas giant, which means you wouldn't find solid ground to stand on. Just floating in the clouds, watching the rings spin!",
  },
  {
    name: "uranus",
    info: "Uranus likes to do things differently—it spins on its side! That means it rolls around the Sun like a giant space barrel. With its icy blue color, Uranus might seem chilly, but it's actually pretty cold, colder than your freezer at home!",
  },
  {
    name: "Neptune",
    info: "Neptune is the farthest planet from the Sun, way out in the chilly depths of space. It's like the mysterious ocean of the solar system, with its deep blue color and fierce winds. Neptune also has the coolest storms, swirling around like gigantic hurricanes!",
  },
];
const baseSize = 100;

type PlanetsInfo = {
  planetsInfo: {
    name: string;
    info: string;
  };
};

type PlanetProps = {
  planet: {
    name: string;
    scale: number;
    fileType: string;
  };
};

function Planet({ planet, index }: PlanetProps & { index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
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
        animate={{ opacity: inView ? 1 : 0, x: inView ? 10 : initialX }}
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

function Info({ planetsInfo, index }: PlanetsInfo & { index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const [quizPassed, setQuizPassed] = useState(false);
  const [initialX, setInitialX] = useState(0);

  const handleQuizResult = (isPassed: boolean) => {
    setQuizPassed(isPassed);
    if (isPassed) {
      console.log("Congratulations! You passed the quiz.");
    } else {
      console.log("Sorry, you didn't pass the quiz. Try again!");
    }
  };

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
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl " />
      <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start max-w-4xl">
        <h1 className="font-bold text-xl text-white mb-4 relative z-50">
          {planetsInfo.name}
        </h1>

        <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
          {planetsInfo.info}
        </p>
        <div className="flex items-center">
          <SunQuiz onQuizResult={handleQuizResult} />
          {quizPassed ? (
            <FontAwesomeIcon icon={faCheckCircle} size="xl" className="pl-3" />
          ) : (
            <FontAwesomeIcon icon={faCircleXmark} size="xl" className="pl-3" />
          )}
        </div>
        <Meteors number={20} />
      </div>
    </motion.div>
  );
}

export default function Planets() {
  return (
    <div className="h-auto w-full flex justify-start items-center overflow-hidden">
      <div className="flex flex-col items-center space-y-20 pt-5 pl-10">
        {planets.map((planet, index) => (
          <Element name={planet.name} key={planet.name}>
            <div className="h-screen flex items-center">
              <Planet planet={planet} index={index} />
            </div>
          </Element>
        ))}
      </div>
      <div className="flex flex-col items-center space-y-20 pt-5">
        {planetsInfo.map((planetsInfo, index) => (
          <div className="h-screen flex items-center" key={planetsInfo.name}>
            <Info planetsInfo={planetsInfo} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}

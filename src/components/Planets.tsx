import Link from "next/link";
import Image from "next/image";

const planets = [
  { name: "sun", scale: 3 },
  { name: "mercury", scale: 0.7 },
  { name: "venus", scale: 0.96 },
  { name: "earth", scale: 1 },
  { name: "mars", scale: 0.8 },
  { name: "jupiter", scale: 2 },
  { name: "saturn", scale: 1.5 },
  { name: "uranus", scale: 1.25 },
  { name: "neptune", scale: 1.2 },
];

const baseSize = 100;

export default function Planets() {
  return (
    <div className="flex flex-col items-center space-y-20">
      {planets.map((planet) => (
        <Link href={`/${planet.name}`} key={planet.name} passHref>
          <Image
            src={`/images/${planet.name}.png`}
            alt={planet.name}
            width={baseSize * planet.scale}
            height={baseSize * planet.scale}
          />
        </Link>
      ))}
    </div>
  );
}

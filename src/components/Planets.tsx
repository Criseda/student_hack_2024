import Link from "next/link";
import Image from "next/image";

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

export default function Planets() {
  return (
    <div className="flex flex-col items-center space-y-20 pt-5">
      {planets.map((planet) => (
        <Link href={`/${planet.name}`} key={planet.name} passHref>
          <Image
            src={`/images/${planet.name}.${planet.fileType}`}
            alt={planet.name}
            width={baseSize * planet.scale}
            height={baseSize * planet.scale}
          />
        </Link>
      ))}
    </div>
  );
}

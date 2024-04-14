import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";
import { useState } from "react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const planets = [
  { name: "Sun", path: "/images/sun.svg" },
  { name: "Mercury", path: "/images/mercury.png" },
  { name: "Venus", path: "/images/venus.svg" },
  { name: "Earth", path: "/images/earth.svg" },
  { name: "Jupiter", path: "/images/jupiter.svg" },
  { name: "Saturn", path: "/images/saturn.svg" },
  { name: "Uranus", path: "/images/uranus.svg" },
  { name: "Neptune", path: "/images/neptune.svg" },
];

const baseWidth = 20;
const baseHeight = 20;



export default function SolarMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"}>
          Solar menu
          <FontAwesomeIcon icon={faBars} className="ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Solar System</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {planets.map((planet) => (
          <DropdownMenuItem key={planet.name} >
            <Link
              to={planet.name.toLowerCase()}
              smooth={true}
              duration={500}
              className="flex items-center"
              onClick={handleMenuItemClick}
            >
              <Image
                src={planet.path}
                alt={planet.name}
                width={baseWidth}
                height={baseHeight}
                className="m-1 ml-0"
              />
              {planet.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

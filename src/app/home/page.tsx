import { HomePage } from "@/components/HomePage";
import Navbar from "@/components/Navbar";



export default function Home() {
  return (
    <div className="relative w-full">
      <Navbar />
      <HomePage />
      <p>filler to create scroll on the right</p>
    </div>
  );
}

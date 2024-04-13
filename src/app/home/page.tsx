import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import Planets from "@/components/Planets";

export default function Home() {
  return (
    <>
      <div className="relative w-full">
        <Navbar />
        <HomePage />
      </div>
      <div className="h-auto w-screen flex justify-center items-center">
        <Planets />
      </div>
    </>
  );
}

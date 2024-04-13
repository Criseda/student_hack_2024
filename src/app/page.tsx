import Image from "next/image";
import { HomePage } from "@/components/HomePage";
import { Suspense } from "react";
import Loading  from "./loading";


export default function Home() {
  return (
  <Suspense fallback={<Loading />}>
    <>
      <HomePage />
    </>
  </Suspense>
  );

}

import Image from "next/image";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

export default function Home() {
  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
    </>
  );
}

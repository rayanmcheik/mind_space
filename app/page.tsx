import Image from "next/image";
import axios from "@/src/utils/axios";
import Section2 from "./components/Section2";
import Section1 from "./components/Section1";

export default function Home() {
  return (
   <section>
      <Section1 />
      <Section2></Section2> 
   </section>
  );
}

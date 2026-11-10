import { api } from "@/lib/api";
import Image from "next/image";
import Workoutcard from "./Workoutcard";
import Workout from "./workout";
import Banner from "@/components/banner";

export default async function Home() {
  const products= await api();
  return (
    <div>
      <Banner />
     <Workout products={products}/>
    </div>
  );
}

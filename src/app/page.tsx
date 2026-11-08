import { api } from "@/lib/api";
import Image from "next/image";
import Workoutcard from "./Workoutcard";
import Workout from "./workout";

export default async function Home() {
  const products= await api();
  return (
    <div>
     <Workout products={products}/>
    </div>
  );
}

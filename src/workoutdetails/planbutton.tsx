
"use client";

import React, { useContext } from "react";
import { ProductType } from "@/types/datatype";
import { ProductContext } from "@/context/productContext";
import toast from "react-hot-toast";

const PlanButton = ({ product }: { product: ProductType }) => {
  const { Addplan, setAddplan } = useContext(ProductContext) as {
    Addplan: ProductType[];
    setAddplan: React.Dispatch<React.SetStateAction<ProductType[]>>;
  };

  const clickHandle = () => {
    setAddplan([...Addplan, product]);
    toast.success("Workout added to your plan!");
  };

  return (
    <button
      className="text-black font-bold"
      onClick={clickHandle}
    >
      Add to Plan
    </button>
  );
};

export default PlanButton;

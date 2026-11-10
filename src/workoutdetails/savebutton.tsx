
"use client";

import React, { useContext } from "react";
import { ProductType } from "@/types/datatype";
import { ProductContext } from "@/context/productContext";
import toast from "react-hot-toast";

const SaveButton = ({ product }: { product: ProductType }) => {
  const { Savedplan, setSavedplan } = useContext(ProductContext) as {
    Savedplan: ProductType[];
    setSavedplan: React.Dispatch<React.SetStateAction<ProductType[]>>;
  };

  const clickHandle = () => {
    if (Savedplan.some((item) => item.id === product.id)) {
      toast.error("Workout already saved!");
      return;
    }
    setSavedplan((prev) => [...prev, product]);
    toast.success("Workout saved!");
  };

  return (
    <button
      className="font-bold"
      onClick={clickHandle}
    >
      Save Workout
    </button>
  );
};

export default SaveButton;

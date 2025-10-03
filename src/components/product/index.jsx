import React from "react";
import Display from "./display";
import DescriptionSection from "./description-section";

export default function Product({ product }) {
  if (!product)
    return (
      <div className="max-w-7xl mx-auto mt-5 md:mt-14 px-3 md:px-5 xl:px-8">
        <h1 className="text-2xl font-semibold text-gray-900 quick_sand">
          Product not found
        </h1>
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto mt-5 md:mt-14 px-3 md:px-5 xl:px-8">
      <Display product={product} />
      <DescriptionSection product={product} />
    </div>
  );
}

import React from "react";
import Discription from "./discription";
import Products from "./products";

export default function DescriptionSection({ product }) {
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 pb-5 md:pb-20">
      <div className="absolute top-10 -right-10 glow-blue"></div>
      <div className="absolute top-1/2 -translate-y-1/2 -right-10 glow-blue"></div>
      <div className="absolute bottom-0 -right-10 glow-blue"></div>
      <Discription product={product} />
      <Products product={product} />
    </div>
  );
}

import React, { useEffect } from "react";
import ItemDisplay from "./item-display";
import TabSection from "./tab-section";
import ItemDisplaySkeleton from "@/components/common/item-display-skeleton";
import { useState } from "react";

export default function Display({ product }) {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (product?.media?.length && !selectedImage) {
      setSelectedImage(product.media[0]);
    }
  }, [product, selectedImage]);

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 pb-5 md:pb-10">
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 glow-blue"></div>

      <ItemDisplay
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        product={product}
      />
      <TabSection
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        product={product}
      />
    </div>
  );
}

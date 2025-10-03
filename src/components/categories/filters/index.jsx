import React from "react";
import ProductCategories from "./product-categories";
import PriceRange from "./price-range";
import Size from "./size";
import PopularBrands from "./popular-brands";

export default function Filters({
  selectedItems,
  setSelectedItems,
  productList,
  priceRange,
  size,
  brands,
  isLoading,
}) {
  return (
    <>
      <ProductCategories
        isLoading={isLoading}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        productList={productList}
      />
      <PriceRange
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        productList={priceRange}
      />
      <Size
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        productList={size}
      />
      <PopularBrands
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        productList={brands}
      />
    </>
  );
}

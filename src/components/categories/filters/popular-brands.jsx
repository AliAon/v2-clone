import Checkbox from "@/components/common/checkbox";
import { Button } from "@/components/ui/button";
import React from "react";

export default function PopularBrands({
  selectedItems,
  setSelectedItems,
  productList,
}) {
  const handleCheckboxChange = (item) => (e) => {
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedItems((prev) => [...prev, item]);
    } else {
      setSelectedItems((prev) =>
        prev.filter((selected) => selected.id !== item.id)
      );
    }
  };

  const isChecked = (item) => {
    return selectedItems.some((selected) => selected.id === item.id);
  };

  return (
    <>
      <div className="relative rounded-2xl shadow-[0px_4px_7.5px_rgba(64,206,236,0.4)] mt-10">
        <div className="absolute bottom-0 -left-10 glow-blue"></div>
        <div className="relative z-10 bg-white p-4 rounded-2xl">
          <Button className="gradient-border-btn quick_sand uppercase font-bold">
            POPULAR BRANDS
          </Button>

          <div className="grid grid-cols-2 gap-4 mt-5">
            {productList.map((item) => (
              <Checkbox
                key={item.id}
                label={item.name}
                id={item.id}
                checked={isChecked(item)}
                onChange={handleCheckboxChange(item)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

import Checkbox from "@/components/common/checkbox";
import Loader from "@/components/common/loader";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function ProductCategories({
  selectedItems,
  setSelectedItems,
  productList,
  isLoading,
}) {
  const router = useRouter();
  const { category } = router.query;

  const handleCheckboxChange = (item) => (e) => {
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedItems((prev) => [...prev, item]);
    } else {
      setSelectedItems((prev) =>
        prev.filter((selected) => selected._id !== item._id)
      );
    }
  };

  const isChecked = (item) => {
    return selectedItems.some((selected) => selected._id === item._id);
  };

  useEffect(() => {
    if (category && productList?.length) {
      const decodedCategory = decodeURIComponent(category);
      const match = productList.find(
        (item) => item.name.toLowerCase() === decodedCategory.toLowerCase()
      );
      if (match) {
        setSelectedItems((prev) => {
          const alreadySelected = prev.some((i) => i._id === match._id);
          return alreadySelected ? prev : [...prev, match];
        });
      }
    }
  }, [category, productList, setSelectedItems]);

  return (
    <div className="relative rounded-2xl shadow-[0px_4px_7.5px_rgba(64,206,236,0.4)]">
      <div className="absolute top-1/2 -translate-y-1/2 -left-10 glow-blue"></div>
      <div className="p-4">
        <Button className="gradient-border-btn quick_sand uppercase font-bold">
          Product Categories
        </Button>
      </div>

      <div className="flex flex-col gap-4 bg-white z-10 relative p-4 rounded-2xl">
        {isLoading ? (
          <div className="h-80 flex items-center justify-center">
            <Loader />
          </div>
        ) : productList?.length === 0 ? (
          <p className="h-80 flex items-center justify-center text-sm text-[#40CEEC] font-medium quick_sand">
            No Product Categories Found
          </p>
        ) : (
          productList?.map((item) => (
            <Checkbox
              key={item._id}
              label={item.name}
              id={item._id}
              checked={isChecked(item)}
              onChange={handleCheckboxChange(item)}
            />
          ))
        )}
      </div>
    </div>
  );
}

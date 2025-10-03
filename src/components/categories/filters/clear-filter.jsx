import React from "react";
import { IoIosClose } from "react-icons/io";

export default function ClearFilter({ item, onRemove }) {
  return (
    <div className="relative w-fit border border-[#40CEEC] rounded-full text-sm text-[#40CEEC] font-medium quick_sand px-3 py-1.5">
      <div
        onClick={() => onRemove(item)}
        className="absolute -top-2 right-2.5 w-4 h-4 flex items-center justify-center bg-[#40CEEC] rounded-full cursor-pointer"
      >
        <IoIosClose size={12} color="#fff" />
      </div>
      {item.name}
    </div>
  );
}

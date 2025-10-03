import React from "react";

export default function Checkbox({
  label,
  checked,
  onChange,
  className = "",
  id,
  disabled = false,
}) {
  return (
    <label
      htmlFor={id}
      className={`inline-flex items-center cursor-pointer group quick_sand ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="appearance-none w-5 h-5 border-2 border-[#40CEEC] rounded-[3px] checked:bg-[#40CEEC] checked:border-transparent transition-all duration-300 peer cursor-pointer"
      />
      <svg
        className="w-5 h-5 text-white hidden peer-checked:block absolute"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M6 10L9 13L14 7"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className={`ml-3 text-sm ${
          checked ? "text-[#40CEEC] font-semibold" : "text-black font-medium"
        }`}
      >
        {label}
      </span>
    </label>
  );
}

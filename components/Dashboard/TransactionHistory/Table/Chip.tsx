import React from "react";

type Props = {
  label?: string;
  variant: "pending" | "progress" | "completed";
};

function Chip({ variant, label }: Props) {
  if (variant === "progress") {
    return (
      <span className="flex items-center gap-2 text-[#FFBF1A]">
        <span className="w-[8px] h-[8px] bg-[#FFBF1A] rounded-lg" />
        {label || "Progress"}
      </span>
    );
  }
  if (variant === "completed") {
    return (
      <span className="flex items-center gap-2 text-[#2DBF3C]">
        <span className="w-[8px] h-[8px] bg-[#2DBF3C] rounded-lg" />
        {label || "Completed"}
      </span>
    );
  }
  return (
    <span className="flex items-center gap-2">
      <span className="w-[8px] h-[8px] bg-[#9E9E9E] rounded-lg" />
      {label || "Pending"}
    </span>
  );
}

export default Chip;

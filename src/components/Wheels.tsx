"use client";
import { useState } from "react";

export default function Wheels({ wheels }: { wheels: string[] }) {
  const [selectedSize, setSelectedSize] = useState(wheels[0]);
  return (
    <>
      <div className="flex w-full flex-col">
        {wheels.map((size) => (
          <button
            className={
              "border bg-white p-4 text-left text-xs" +
              (selectedSize === size
                ? " border-[#b59251]"
                : " border-[#e5e5e5]")
            }
            key={size}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </>
  );
}

"use client";

import { useState } from "react";

export default function FrameSize({ sizes }: { sizes: string[] }) {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  return (
    <>
      <div className="flex flex-wrap">
        {sizes.map((size) => (
          <button
            className={
              "w-fit border bg-white p-4 text-center text-xs" +
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

"use client";
import { useState } from "react";
import { Wheel } from "~/db/schema";

export default function Wheels({ wheels }: { wheels: Wheel[] }) {
  const [selectedSize, setSelectedSize] = useState(wheels[0]);
  return (
    <>
      <div className="flex w-full flex-col">
        {wheels.map((wheel) => (
          <button
            className={
              "border bg-white p-4 text-left text-xs" +
              (selectedSize === wheel
                ? " border-[#b59251]"
                : " border-[#e5e5e5]")
            }
            key={wheel.id}
            onClick={() => setSelectedSize(wheel)}
          >
            {wheel.name}
          </button>
        ))}
      </div>
    </>
  );
}

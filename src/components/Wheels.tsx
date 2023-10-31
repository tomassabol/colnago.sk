"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Wheel } from "~/db/schema";

export default function Wheels({ wheels }: { wheels: Wheel[] }) {
  const [selectedSize, setSelectedSize] = useState(wheels[0]);
  return (
    <>
      <div className="flex w-full flex-col">
        {wheels.map((wheel) => (
          <button
            className={twMerge(
              "border bg-white p-4 text-left text-xs",
              selectedSize === wheel
                ? " border-[#b59251]"
                : " border-[#e5e5e5]",
              wheels.indexOf(wheel) === 0 ? "rounded-t-md" : "",
              wheels.indexOf(wheel) === wheels.length - 1 ? "rounded-b-md" : "",
            )}
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

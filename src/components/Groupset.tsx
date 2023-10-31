"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Groupset } from "~/db/schema";

export default function Groupset({ groupsets }: { groupsets: Groupset[] }) {
  const [selectedGroupset, setSelectedGroupset] = useState(groupsets[0]);
  return (
    <>
      <div className="flex w-full flex-col">
        {groupsets.map((groupset) => (
          <button
            className={twMerge(
              "border bg-white p-4 text-left text-xs",
              selectedGroupset === groupset
                ? " border-[#b59251]"
                : " border-[#e5e5e5]",
              groupsets.indexOf(groupset) === 0 ? "rounded-t-md" : "",
              groupsets.indexOf(groupset) === groupsets.length - 1
                ? "rounded-b-md"
                : "",
            )}
            key={groupset.id}
            onClick={() => setSelectedGroupset(groupset)}
          >
            {groupset.name}
          </button>
        ))}
      </div>
    </>
  );
}

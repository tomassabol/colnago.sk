"use client";
import { useState } from "react";
import { Groupset } from "~/db/schema";

export default function Groupset({ groupsets }: { groupsets: Groupset[] }) {
  const [selectedGroupset, setSelectedGroupset] = useState(groupsets[0]);
  return (
    <>
      <div className="flex w-full flex-col">
        {groupsets.map((groupset) => (
          <button
            className={
              "border bg-white p-4 text-left text-xs" +
              (selectedGroupset === groupset
                ? " border-[#b59251]"
                : " border-[#e5e5e5]")
            }
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

import React from "react";

export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h3 className="py-4 pb-8 text-4xl font-medium text-[#b59251]">
        {children}
      </h3>
    </>
  );
}

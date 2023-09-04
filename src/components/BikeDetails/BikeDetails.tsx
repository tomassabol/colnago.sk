"use client";

import { useState } from "react";
import Heading from "../Heading";

export default function BikeDetails() {
  const [selectedHeading, setSelectedHeading] =
    useState<(typeof headings)[number]>("Rám");
  const headings = ["Rám", "Kola", "Sada", "Sedlo", "Pneumatiky"] as const;
  return (
    <>
      <Heading>Detaily</Heading>
      <section className="flex flex-col gap-10">
        <div className="flex w-full justify-center uppercase">
          {headings.map((heading, index) => (
            <label
              key={heading[index]}
              className={
                "min-w-[10vw] cursor-pointer border-b px-5 pb-2 text-center text-sm hover:border-[#b59251] hover:text-[#b59251]" +
                (selectedHeading === heading
                  ? " border-[#b59251] text-[#b59251]"
                  : null)
              }
              onClick={() => setSelectedHeading(heading)}
            >
              {heading}
            </label>
          ))}
        </div>

        {selectedHeading === "Rám" ? (
          <div className="lg:gap-y-auto flex flex-wrap gap-y-10">
            <div className="lg:w-1/2 lg:px-5">
              <label htmlFor="vidlice" className="font-bold uppercase">
                Vidlice
              </label>
              <p className="whitespace-pre-line text-sm">
                Vidlice se oproti předchozímu tvaru TFS 'D' mění pro mnohem
                jednodušší, elegantní a lehčí kulatou 1"1/8 trubku. Pro uložení
                brzdového pouzdra uvnitř jsme přijali speciální patentovaný
                systém excentrického hlavového složení, aniž bychom museli
                použít větší a těžké 1,5" ložisko.
              </p>
            </div>
            <div className="lg:w-1/2 lg:px-5">
              <label htmlFor="vidlice" className="font-bold uppercase">
                Vidlice
              </label>
              <p className="whitespace-pre-line text-sm">
                Vidlice se oproti předchozímu tvaru TFS 'D' mění pro mnohem
                jednodušší, elegantní a lehčí kulatou 1"1/8 trubku. Pro uložení
                brzdového pouzdra uvnitř jsme přijali speciální patentovaný
                systém excentrického hlavového složení, aniž bychom museli
                použít větší a těžké 1,5" ložisko.
              </p>
            </div>
            <div className="lg:w-1/2 lg:px-5">
              <label htmlFor="vidlice" className="font-bold uppercase">
                Vidlice
              </label>
              <p className="whitespace-pre-line text-sm">
                Vidlice se oproti předchozímu tvaru TFS 'D' mění pro mnohem
                jednodušší, elegantní a lehčí kulatou 1"1/8 trubku. Pro uložení
                brzdového pouzdra uvnitř jsme přijali speciální patentovaný
                systém excentrického hlavového složení, aniž bychom museli
                použít větší a těžké 1,5" ložisko.
              </p>
            </div>
            <div className="lg:w-1/2 lg:px-5">
              <label htmlFor="vidlice" className="font-bold uppercase">
                Vidlice
              </label>
              <p className="whitespace-pre-line text-sm">
                Vidlice se oproti předchozímu tvaru TFS 'D' mění pro mnohem
                jednodušší, elegantní a lehčí kulatou 1"1/8 trubku. Pro uložení
                brzdového pouzdra uvnitř jsme přijali speciální patentovaný
                systém excentrického hlavového složení, aniž bychom museli
                použít větší a těžké 1,5" ložisko.
              </p>
            </div>
          </div>
        ) : selectedHeading === "Sada" ? (
          <></>
        ) : selectedHeading === "Sedlo" ? (
          <></>
        ) : selectedHeading === "Pneumatiky" ? (
          <></>
        ) : null}
      </section>
    </>
  );
}

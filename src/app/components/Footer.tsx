import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="flex justify-evenly items-start w-screen h-[35vh] bg-black text-sm px-44 py-16">
        {/* bicykle */}
        <div className="flex flex-col items-start h-fit gap-6">
          <h3 className="text-[#b59251] uppercase tracking-widest">Bicykle</h3>
          <ul className="flex flex-col gap-y-2 text-[#787878]">
            <li>
              <Link href="/">Cestné</Link>
            </li>
            <li>
              <Link href="/">Allroad</Link>
            </li>
            <li>
              <Link href="/">Gravel</Link>
            </li>
            <li>
              <Link href="/">Časovka</Link>
            </li>
            <li>
              <Link href="/">Klasika</Link>
            </li>
          </ul>
        </div>

        {/* Colnago */}
        <div className="flex flex-col items-start h-fit gap-6">
          <h3 className="text-[#b59251] uppercase tracking-widest">
            Sieň slávy
          </h3>
          <ul className="flex flex-col gap-y-2 text-[#787878]">
            <li>
              <Link href="/">Sieň slávy</Link>
            </li>
            <li>
              <Link href="/">História</Link>
            </li>
            <li>
              <Link href="/">Eventy</Link>
            </li>
          </ul>
        </div>

        {/* Kontaktujte nás */}
        <div className="flex flex-col items-start  h-fit gap-6">
          <h3 className="text-[#b59251] uppercase tracking-widest">
            Kontaktujte nás
          </h3>
          <ul className="flex flex-col gap-y-2 text-[#787878]">
            <li>
              <Link href="/">Predajne</Link>
            </li>
            <li>
              <Link href="/">Napíšte nám</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

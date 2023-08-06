import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="flex justify-evenly items-start w-screen h-[35vh] bg-black text-sm px-44 py-16">
        {/* bicykle */}
        <div className="flex flex-col items-start h-fit gap-6">
          <h3 className="text-[#b59251] uppercase tracking-widest">Bicykle</h3>
          <ul className="flex flex-col gap-y-2 text-[#787878]">
            <li>Cestní</li>
            <li>Allroad</li>
            <li>Gravel</li>
            <li>Časovka</li>
            <li>Klasika</li>
          </ul>
        </div>

        {/* Colnago */}
        <div className="flex flex-col items-start h-fit gap-6">
          <h3 className="text-[#b59251] uppercase tracking-widest">
            Sieň slávy
          </h3>
          <ul className="flex flex-col gap-y-2 text-[#787878]">
            <li>Sieň slávy</li>
            <li>História</li>
            <li>Eventy</li>
          </ul>
        </div>

        {/* Kontaktujte nás */}
        <div className="flex flex-col items-start  h-fit gap-6">
          <h3 className="text-[#b59251] uppercase tracking-widest">
            Kontaktujte nás
          </h3>
          <ul className="flex flex-col gap-y-2 text-[#787878]">
            <li>Predajne</li>
            <li>Napíšte nám</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

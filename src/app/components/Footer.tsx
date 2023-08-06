import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="flex justify-between w-screen h-[45vh] bg-black">
        <div className="flex flex-col justify-center items-start w-1/4 h-full">
          <h3 className="text-[#b59251] text-sm uppercase tracking-widest">
            Kola
          </h3>
          <ul className="flex flex-col gap-y-2">
            <li className="text-[#b59251] text-sm uppercase tracking-widest">
              C64
            </li>
            <li className="text-[#b59251] text-sm uppercase tracking-widest">
              V3RS
            </li>
            <li className="text-[#b59251] text-sm uppercase tracking-widest">
              V3RS Disc
            </li>
            <li className="text-[#b59251] text-sm uppercase tracking-widest">
              C64 Disc
            </li>
            <li className="text-[#b59251] text-sm uppercase tracking-widest">
              C64 Disc Brake
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

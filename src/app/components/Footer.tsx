import React from "react";
import Link from "next/link";
import FooterCol from "./FooterCol";

export default function Footer() {
  return (
    <>
      <footer className="flex justify-evenly items-start w-screen h-[35vh] bg-gray-950 text-sm lg:px-44 md:px-16 px-2 py-16">
        {/* bicykle */}
        <FooterCol
          title="Bicykle"
          links={[
            { title: "Cestné", href: "/" },
            { title: "Allroad", href: "/" },
            { title: "Gravel", href: "/" },
            { title: "Časovka", href: "/" },
            { title: "Klasika", href: "/" },
          ]}
          key={crypto.randomUUID()}
        />

        {/* Colnago */}
        <FooterCol
          title="Colnago"
          links={[
            { title: "História", href: "/" },
            { title: "Technológie", href: "/" },
            { title: "Sieň slávy", href: "/" },
            { title: "Eventy", href: "/" },
          ]}
          key={crypto.randomUUID()}
        />

        {/* Kontaktujte nás */}
        <FooterCol
          title="Kontakt"
          links={[
            { title: "Predajne", href: "/" },
            { title: "Napíšte nám", href: "/" },
          ]}
          key={crypto.randomUUID()}
        />
      </footer>
    </>
  );
}

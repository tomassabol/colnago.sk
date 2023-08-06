import React from "react";
import Logo from "~/app/assets/images/colnago-logo.svg";
import Menu from "~/app/assets/images/burger-menu.svg";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="bg-gradient-to-b from-black to-transparent h-[7rem] flex justify-between items-center px-10 absolute w-screen">
        <Image
          src={Menu}
          alt="Menu"
          className="h-auto w-[3rem] xl:hidden"
          priority
        />
        <Link href="/">
          <Image
            src={Logo}
            alt="Colnago Logo"
            className="w-[10em] h-content-fit"
            priority
          />
        </Link>
        <nav className="hidden xl:flex">
          <ul className="gap-x-10 flex text-sm tracking-widest">
            <li className="text-white">
              <Link href="/">Úvod</Link>
            </li>
            <li className="text-white">
              <Link href="/">Bicykle</Link>
            </li>
            <li className="text-white">
              <Link href="/">Eventy</Link>
            </li>
            <li className="text-white">
              <Link href="/">Blog</Link>
            </li>
            <li className="text-white">
              <Link href="/">Kontakty</Link>
            </li>
          </ul>
        </nav>
        <span />
      </header>
    </>
  );
}

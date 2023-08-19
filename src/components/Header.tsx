import React from "react";
import Logo from "~/assets/images/colnago-logo.svg";
import Menu from "~/assets/images/burger-menu.svg";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  type Link = {
    title: string;
    href: string;
  };

  const links: Link[] = [
    { title: "Domov", href: "/" },
    { title: "Bicykle", href: "/" },
    { title: "Eventy", href: "/" },
    { title: "Blog", href: "/" },
    { title: "Kontakty", href: "/" },
  ];
  return (
    <header className="bg-gradient-to-b from-gray-900 to-transparent h-[7rem] flex justify-between items-center px-10 w-screen absolute z-50">
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
        <ul className="gap-x-10 flex text-sm tracking-widest text-white">
          {links.map((link) => (
            <li key={crypto.randomUUID()}>
              <Link href={link.href} className="cursor-pointer">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <span />
    </header>
  );
}

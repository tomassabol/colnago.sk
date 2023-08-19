"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import Menu from "~/assets/images/burger-menu.svg";
import Logo from "~/assets/images/colnago-logo.svg";

export default function Header() {
  type Link = {
    title: string;
    href: string;
  };

  const style = twMerge(
    "flex h-[7rem] w-screen items-center justify-between  px-10",
    usePathname() === "/"
      ? "absolute z-50 bg-gradient-to-b from-gray-900 to-transparent"
      : "static",
  );

  const links: Link[] = [
    { title: "Domov", href: "/" },
    { title: "Bicykle", href: "/bicykle" },
    { title: "Eventy", href: "/" },
    { title: "Blog", href: "/" },
    { title: "Kontakty", href: "/" },
  ];
  console.log();
  return (
    <header className={style}>
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
          className="h-content-fit w-[10em]"
          priority
        />
      </Link>
      <nav className="hidden xl:flex">
        <ul className="flex gap-x-10 text-sm tracking-widest text-white">
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

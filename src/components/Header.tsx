"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Menu from "~/assets/images/burger-menu.svg";
import Logo from "~/assets/images/colnago-logo.svg";

export default function Header() {
  const pathname = usePathname();
  const [variant, setVariant] = useState<string>("");
  useEffect(() => {
    const newVariant =
      pathname === "/" || pathname.match(/\//g)?.length === 2
        ? "absolute z-50 flex h-[7rem] w-screen items-center justify-between bg-gradient-to-b from-gray-900 to-transparent px-10"
        : "static flex h-[7rem] w-screen items-center justify-between px-10";

    setVariant(newVariant);
  }, [pathname]);

  type Link = {
    title: string;
    href: string;
  };
  const links: Link[] = [
    { title: "Domov", href: "/" },
    { title: "Bicykle", href: "/bicykle" },
    { title: "Eventy", href: "/" },
    { title: "Blog", href: "/" },
    { title: "Kontakty", href: "/" },
  ];
  return (
    <header className={variant}>
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

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { title: "Kontakt", href: "/" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={variant}>
      <div className="flex w-screen items-center justify-between">
        <Image
          src={Menu}
          alt="Menu"
          className="h-auto w-[3rem] cursor-pointer xl:hidden"
          priority
          onClick={toggleMobileMenu}
        />
        <Link href="/">
          <Image
            src={Logo}
            alt="Colnago Logo"
            className="h-content-fit w-[10em]"
            priority
          />
        </Link>
        <nav className="hidden flex-grow justify-center xl:flex">
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
        <div />

        {isMobileMenuOpen && (
          <nav className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black">
            <div className="absolute right-4 top-4">
              <svg
                onClick={closeMobileMenu}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x cursor-pointer"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </div>
            <ul className="flex flex-col gap-y-6 text-xl text-white">
              {links.map((link) => (
                <li key={crypto.randomUUID()}>
                  <Link
                    href={link.href}
                    className="cursor-pointer"
                    onClick={closeMobileMenu}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

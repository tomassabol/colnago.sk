"use client";
import { ChevronRightIcon, HomeIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BreadCrumbNav() {
  const pathname = usePathname();
  const routes = pathname.split("/").filter((route) => route !== "");

  return (
    <>
      <section className="text-md flex items-center gap-2 p-5 font-medium">
        <Link href="/">
          <HomeIcon />
        </Link>
        <ChevronRightIcon />
        {routes.map((route, index) => {
          return (
            <Link key={index} href={route}>
              {route}
            </Link>
          );
        })}
      </section>
    </>
  );
}

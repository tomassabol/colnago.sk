"use client";
import { ChevronRightIcon, HomeIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BreadCrumbNav() {
  const pathname = usePathname();
  const routes = pathname.split("/").filter((route) => route !== "");

  return (
    <>
      <section className="text-md flex items-center gap-2 font-medium">
        <Link href="/">
          <HomeIcon />
        </Link>
        {routes.map((route, index) => {
          return (
            <div className="flex items-center gap-2" key={index}>
              <ChevronRightIcon />
              <Link href={"/" + route}>{route}</Link>
            </div>
          );
        })}
      </section>
    </>
  );
}

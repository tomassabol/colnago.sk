"use client";
import { ChevronRightIcon, HomeIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function BreadCrumbNav({ name }: { name?: string }) {
  return (
    <>
      <section className="text-md flex items-center gap-2 font-medium">
        <Link href="/">
          <HomeIcon />
        </Link>
        <ChevronRightIcon />
        <Link href="/bicykle">Bicykle</Link>
        {name && (
          <>
            <ChevronRightIcon />
            <span>{name}</span>
          </>
        )}
      </section>
    </>
  );
}

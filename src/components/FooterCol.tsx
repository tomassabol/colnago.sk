import React from "react";
import Link from "next/link";

type Link = {
  title: string;
  href: string;
};
export default function FooterCol(props: { title: string; links: Link[] }) {
  return (
    <>
      <div className="flex flex-col items-start h-fit gap-6">
        <h3 className="text-[#b59251] uppercase tracking-widest">
          {props.title}
        </h3>
        <ul className="flex flex-col gap-y-2 text-[#787878]">
          {props.links.map((link) => (
            <li key={crypto.randomUUID()}>
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

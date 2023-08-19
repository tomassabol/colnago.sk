import Link from "next/link";

type Link = {
  title: string;
  href: string;
};
export default function FooterCol(props: {
  title: string;
  titleLink: string;
  links: Link[];
}) {
  return (
    <>
      <div className="flex h-fit flex-col items-start gap-6">
        <Link
          className="uppercase tracking-widest text-[#b59251]"
          href={props.titleLink}
        >
          {props.title}
        </Link>
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

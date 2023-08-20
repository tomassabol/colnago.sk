import BreadCrumbNav from "~/components/BreadCrumbNav";
import { api } from "~/trpc/server-http";

export function generateStaticParams() {
  return [
    { slug: "C68" },
    { slug: "C68-allroad" },
    { slug: "v4rs" },
    { slug: "v3rs" },
    { slug: "v3" },
    { slug: "tt1" },
    { slug: "master" },
    { slug: "arabesque" },
    { slug: "gr-x" },
    { slug: "c68-ti" },
    { slug: "c68-ltd" },
  ];
}

export default async function Page({ params }: { params: { slug: string } }) {
  const bike = await api.getBikeBySlug.query({ slug: params.slug });
  return (
    <>
      <section className="h-min-screen min-h-[58vh] w-screen space-y-5 bg-slate-50 p-10 text-slate-950">
        <BreadCrumbNav />
        <span>{JSON.stringify(bike)}</span>
      </section>
    </>
  );
}

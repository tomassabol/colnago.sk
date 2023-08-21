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
      <section
        className={"text-white, h-[85vh] w-full"}
        style={{
          background: `url(${bike.bike_details.bg_image}) center 100% no-repeat `,
        }}
      >
        <div className="relative h-full w-screen">
          <div className="absolute bottom-[30vh] space-y-4 md:w-1/2 xl:left-20 xl:w-1/4">
            <BreadCrumbNav />
            <div className="space-y-10 pb-10">
              <p className="text-5xl font-extrabold italic">
                {bike.bike?.name}
              </p>
              <p>{bike.bike?.description}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="h-min-screen min-h-[58vh] w-screen space-y-5 bg-slate-50 p-10 text-slate-950">
        <span>{JSON.stringify(bike)}</span>
      </section>
    </>
  );
}

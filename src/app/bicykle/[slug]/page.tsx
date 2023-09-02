import BreadCrumbNav from "~/components/BreadCrumbNav";
import Spacer from "~/components/Spacer";
import Vimeo from "~/components/Vimeo";
import VimeoDescription from "~/components/VimeoDescription";
import { trpc } from "~/trpc/serverClient";

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
  const bike = await trpc.bikes.getBikeBySlug({ slug: params.slug });
  return (
    <>
      <section
        className="text-white, h-[85vh] w-full"
        style={{
          background: `url('https://s3.eu-west-1.amazonaws.com/colnago.sk/c68/c63_bck.jpg') center 100% no-repeat `,
        }}
      >
        <div className="relative h-full w-screen">
          <div className="absolute bottom-[30vh] space-y-4 md:w-1/2 xl:left-20 xl:w-1/4">
            <BreadCrumbNav />
            <div className="space-y-10 pb-10">
              <p className="text-5xl font-extrabold italic">
                {bike?.bike?.name}
              </p>
              <p>{bike?.bike?.description}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="h-min-screen min-h-[58vh] w-screen space-y-5 bg-slate-50 p-10 text-slate-950 ">
        <section className="h-screen"></section>
        <Spacer />
        <section className="md:h-[80vh] lg:h-screen">
          <h3 className="py-4 pb-8 text-4xl font-medium text-[#b59251]">
            Video
          </h3>
          <Vimeo src="https://player.vimeo.com/video/822807364?h=ca735158f1&title=0&byline=0&portrait=0">
            <VimeoDescription
              title="Objavte nové colnago"
              description="NOVÝ VRCHOL ITALSKÉHO CYKLISTICKÉHO ŘEMESLA"
            />
          </Vimeo>
        </section>
        <span className="h-max">{JSON.stringify(bike)}</span>
      </section>
    </>
  );
}

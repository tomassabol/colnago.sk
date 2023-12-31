import Image from "next/image";
import Link from "next/link";
import Cover from "~/assets/images/cover.jpeg";
import Predajna from "~/assets/images/prodejna.jpg";
import TestRide from "~/assets/images/test-ride.jpeg";
import OldImage from "~/assets/images/whycol.jpg";
import ButtonReusable from "~/components/Buttons/ButtonReusable";
import Card from "~/components/Card";
import Vimeo from "~/components/Vimeo";
import VimeoDescription from "~/components/VimeoDescription";
import WhyColnago from "~/components/WhyColnago";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return (
    <main className="flex w-screen flex-col bg-white">
      <section
        className="h-[85vh] w-full"
        style={{
          aspectRatio: "auto auto",
          background: `linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)) 0% 0% / cover, url(${Cover.src}) center 100% no-repeat transparent`,
        }}
      >
        <div className="relative h-full w-screen text-white">
          <div className="absolute bottom-[30vh] left-12 md:w-1/2 xl:left-40 xl:w-1/4">
            <div className="pb-10">
              <h5>Colnago</h5>
              <h3 className="text-5xl ">C68 - made in Italy</h3>
            </div>
            <Link href="/bicykle/c68">
              <ButtonReusable variant="primary">Viac informácií</ButtonReusable>
            </Link>
          </div>
        </div>
      </section>

      {/* <section className="flex h-screen w-screen flex-col text-black">
        <div className="relative flex w-screen justify-center border-b-[0.5px] border-slate-300 py-10">
          <span className="absolute bottom-[-1px] w-[10rem] border-b-[1.5px] border-[#b59251]" />
          <span className="absolute bottom-[8px] text-center text-xs uppercase tracking-widest text-[#b59251]">
            Bicykle Colnago
          </span>
        </div>
      </section> */}
      {/* TODO: Remove */}
      <section className="flex h-[30vh] w-screen flex-col text-black">
        <div className="relative flex w-screen justify-center py-10"></div>
      </section>

      <section className="relative h-[63vh] bg-gray-950">
        <div className="absolute -top-24 w-full px-[20vw]">
          <Vimeo src="https://player.vimeo.com/video/822807364?h=ca735158f1&title=0&byline=0&portrait=0">
            <VimeoDescription
              title="Postavené ručne, stvorené tam kde všetko začalo"
              description="COLNAGO ERNESTO & C. SRL, VIALE BRIANZA, 9, 20040 CAMBIAGO MI, TALIANSKO"
            />
          </Vimeo>
        </div>
      </section>

      <section className="flex h-fit w-full flex-col items-center justify-center gap-12 bg-white p-10 xl:h-[95vh] xl:flex-row xl:p-24">
        <WhyColnago />
        <Image
          src={OldImage}
          alt="old colnago bike"
          className="w-screen xl:h-[70%] xl:w-fit"
          priority
        />
      </section>

      <section className="relative h-fit w-screen bg-gray-950 py-12 xl:h-[50vh] xl:py-0">
        <div className="flex w-full flex-col items-center justify-center gap-4 xl:absolute xl:-top-10 xl:flex-row xl:items-end">
          <Image src={Predajna} alt="predajna" className="w-[610px]" />
          <div className="flex flex-row gap-2 xl:flex-col">
            <Card
              title="BigBike"
              address={{
                street: "Sabinovská 11",
                city: "Prešov",
                zip: "080 01",
                telephone: "+421 948 200 411",
              }}
              key={1}
            />
            <Card
              title="BigBike 2"
              address={{
                street: "Sabinovská 7",
                city: "Prešov",
                zip: "080 01",
                telephone: "+421 948 200 411",
              }}
              key={2}
            />
          </div>
        </div>
      </section>

      <section className="relative h-auto w-screen">
        <Image src={TestRide} alt="test ride" />
        <div className="absolute left-0 top-0 flex flex-col gap-1 p-4 md:left-10 md:top-20 xl:left-20 xl:top-40 xl:gap-4">
          <h3 className="uppercase tracking-widest text-[#b59251] xl:py-4">
            Test ride
          </h3>
          <p className="w-2/3 text-xl font-extrabold italic text-slate-900 xl:text-5xl">
            Objednajte sa a dajte si skúšobnú jazdu
          </p>
          <ButtonReusable variant="primary">
            Objednať testovaciu jazdu
          </ButtonReusable>
        </div>
      </section>
    </main>
  );
}

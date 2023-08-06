import ButtonReusable from "~/app/components/Buttons/ButtonReusable";
import Image from "next/image";
import OldImage from "~/app/assets/images/whycol.jpg";
import WhyColnago from "~/app/components/WhyColnago";
import Predajna from "~/app/assets/images/prodejna.jpg";
import Card from "~/app/components/Card";
import TestRide from "~/app/assets/images/test-ride.jpeg";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <main className="flex flex-col bg-white w-screen">
        <section
          className="w-full h-[85vh]"
          style={{
            aspectRatio: "auto auto",
            background:
              'linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)) 0% 0% / cover, url("https://cdn.myshoptet.com/usr/www.colnago.cz/user/banners/c68.jpg?64413bd0") center 100% no-repeat transparent',
          }}
        >
          <div className="relative w-screen h-full">
            <div className="absolute bottom-[30vh] xl:left-40 left-6 md:w-1/2 xl:w-1/4">
              <div className="pb-10">
                <h3>Colnago</h3>
                <p className="text-5xl font-extrabold italic">
                  C68 - made in Italy
                </p>
              </div>
              <ButtonReusable variant="primary">Viac informácií</ButtonReusable>
            </div>
          </div>
        </section>

        <section className="flex flex-col w-screen h-screen text-black">
          <div className="border-b-[0.5px] border-slate-300 w-screen py-10 flex justify-center relative">
            <span className="absolute bottom-[-1px] border-b-[1.5px] border-[#b59251] w-[10rem]" />
            <span className="absolute bottom-[8px] text-center text-[#b59251] text-xs uppercase tracking-widest">
              Bicykle Colnago
            </span>
          </div>
        </section>

        <section className="flex flex-col items-center w-full h-[63.5vh] bg-gray-950 relative">
          <iframe
            className="absolute -top-10 right-50 left-50 xl:w-[853px] w-full xl:h-[480px] h-[45vh]"
            src={`https://www.youtube.com/embed/ZszhknJukdk`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
          <div className="flex flex-col absolute xl:bottom-16 bottom-12 px-4">
            <h3 className="font-bold xl:text-3xl text-2xl italic">
              Postavené ručne, stvorené tam kde všetko začalo
            </h3>
            <div className="flex items-center gap-x-2">
              <span className="border-b-[1.5px] border-[#b59251] w-[2rem]" />
              <p className="text-[#b59251] lg:text-sm text-xs uppercase tracking-widest">
                COLNAGO ERNESTO & C. SRL, VIALE BRIANZA, 9, 20040 CAMBIAGO MI,
                TALIANSKO
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col xl:flex-row justify-center items-center w-full xl:p-24 p-10 xl:h-[95vh] h-fit bg-white gap-12">
          <WhyColnago />
          <Image src={OldImage} alt="old colnago bike" priority />
        </section>

        <section className="relative w-screen xl:h-[50vh] h-fit py-12 xl:py-0 bg-gray-950">
          <div className="flex xl:items-end flex-col xl:flex-row items-center w-full gap-4 justify-center xl:absolute xl:-top-10">
            <Image src={Predajna} alt="predajna" className="w-[610px]" />
            <div className="flex flex-row xl:flex-col gap-2">
              <Card
                title="BigBike"
                address={{
                  street: "Sabinovská 11",
                  city: "Prešov",
                  zip: "080 01",
                  telephone: "+421 948 200 411",
                }}
                key={crypto.randomUUID()}
              />
              <Card
                title="BigBike"
                address={{
                  street: "Sabinovská 11",
                  city: "Prešov",
                  zip: "080 01",
                  telephone: "+421 948 200 411",
                }}
                key={crypto.randomUUID()}
              />
            </div>
          </div>
        </section>

        <section className="h-auto w-screen relative">
          <Image src={TestRide} alt="test ride" />
          <div className="flex flex-col absolute xl:top-40 top-0 md:top-20 xl:left-20 left-0 md:left-10 p-4 xl:gap-4 gap-1">
            <h3 className="text-[#b59251] uppercase tracking-widest xl:py-4">
              Test ride
            </h3>
            <p className="xl:text-5xl text-xl font-extrabold italic text-slate-900 w-2/3">
              Objednajte sa a dajte si skúšobnú jazdu
            </p>
            <ButtonReusable variant="primary">
              Objednať testovaciu jazdu
            </ButtonReusable>
          </div>
        </section>
      </main>
    </>
  );
}

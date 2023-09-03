import Cyclist from "~/assets/images/z9b_2583_optimized.jpg";
import BikeDescription from "~/components/BikeDetails/BikeDescription";
import BikeHeroPage from "~/components/BikeDetails/BikeHeroPage";
import BikeVideo from "~/components/BikeDetails/BikeVideo";
import BreadCrumbNav from "~/components/BreadCrumbNav";
import Spacer from "~/components/Spacer";
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
      {bike?.bike ? <BikeHeroPage bike={bike?.bike} /> : null}

      <section className="w-screen space-y-5 bg-slate-50 p-10 text-slate-950 ">
        <section className="h-screen"></section>

        <Spacer />

        <BikeVideo
          video="https://player.vimeo.com/video/822807364?h=ca735158f1&title=0&byline=0&portrait=0"
          title="Objavte nové colnago"
          description="NOVÝ VRCHOL ITALSKÉHO CYKLISTICKÉHO ŘEMESLA"
        />

        <BikeDescription
          title="Precizní zpracování, špičková jízda"
          description="Colnago C68, jak číslo naznačuje, je model vytvořený 68 let od
            založení firmy. Model C68 je opět ručně vyráběný z karbonu, v
            továrně Colnago v Cambiagu, Itálii, a představuje skutečně class,
            tedy třídu samu pro sebe. Model C68 je nadále rámem pro cyklisty,
            kteří ocení špičkové dílenské i designové zpracování a lakování a
            fascinuje je technologická výjimečnost. U rámu C68 je použit stejný
            počet spojek jako u modelu C64, jsou však jinak uspořádány a
            konstruovány. Skladba rámu ze sedmi částí umožňuje vytvořit sedm
            různých dílů, kdy každý Colnago vyrábí pomocí vlastního
            technologického postupu. Ten umožňuje docílit nejen vyššího tlaku na
            karbon, ale i každý díl precizně tvarovat a dosáhnout kýžené
            konstrukční pevnosti. Jelikož jsou formy menší, je nad procesem
            laminace lepší kontrola. Této volnosti nelze při konstrukci
            monocoque rámů docílit. Důležitou myšlenkou vylepšení již tak
            skvělých vlastností je propojení některých součástí – konkrétně
            trubek se spojkami do jednoho celku. Nově je tak prakticky z jednoho
            kusu horní rámová roura a vrchní část hlavy, spodní část hlavy
            pokračuje spodní rámovou trubkou ke středu a podobně. Středové
            složení je nyní ve standardu T47. I u tohoto modelu je důraz více
            kladen na bezpečnost jezdců a stálost pevnosti konstrukce v čase.
            Hmotnost rámu je 925 gramů (velikost 485 bez kovových doplňků)."
          image={Cyclist.src}
        />

        <Spacer />

        <section className="h-screen">
          <span className="h-max text-red-200">{JSON.stringify(bike)}</span>
        </section>
      </section>
    </>
  );
}

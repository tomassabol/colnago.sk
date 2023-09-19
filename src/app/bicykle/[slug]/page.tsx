import Cyclist from "~/assets/images/z9b_2583_optimized.jpg";
import BikeDescription from "~/components/BikeDetails/BikeDescription";
import BikeDetails from "~/components/BikeDetails/BikeDetails";
import BikeGeometry from "~/components/BikeDetails/BikeGeometry";
import BikeHeroPage from "~/components/BikeDetails/BikeHeroPage";
import BikePerformance from "~/components/BikeDetails/BikePerformance";
import BikeVideo from "~/components/BikeDetails/BikeVideo";
import ImageCarousel from "~/components/BikeDetails/ImageCarousel";
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
      {bike?.bike ? <BikeHeroPage bike={bike?.bike} /> : null}

      <section className="w-screen space-y-5 bg-slate-50 p-10 pb-28 text-slate-950">
        <ImageCarousel />

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

        <BikeGeometry />

        <Spacer />

        <BikeDetails />

        <Spacer />

        <BikePerformance />
      </section>
    </>
  );
}

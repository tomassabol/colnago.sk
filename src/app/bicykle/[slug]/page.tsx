import BikeConfig from "~/components/BikeDetails/BikeConfig";
import BikeDescription from "~/components/BikeDetails/BikeDescription";
import BikeDetails from "~/components/BikeDetails/BikeDetails";
import BikeGeometry from "~/components/BikeDetails/BikeGeometry";
import BikeHeroPage from "~/components/BikeDetails/BikeHeroPage";
import BikePerformance from "~/components/BikeDetails/BikePerformance";
import BikeVideo from "~/components/BikeDetails/BikeVideo";
import Spacer from "~/components/Spacer";
import { Groupset } from "~/db/schema";
import { trpc } from "~/trpc/serverClient";

export default async function Page({ params }: { params: { slug: string } }) {
  const bike = await trpc.bikes.getBikeBySlug({ slug: params.slug });
  const bikeColors = await trpc.bikes.getBikeColors({
    id: bike.bike_details.id,
  });
  const frameSizes = await trpc.bikes.getBikeSizes({
    id: bike.bike_details.id,
  });
  const groupsets = await trpc.bikes.getBikeGroupsets({
    id: bike.bike_details.id,
  });
  const wheels = await trpc.bikes.getBikeWheels({
    id: bike.bike_details.id,
  });

  return (
    <>
      <BikeHeroPage bike={bike?.bike!} />

      <section className="w-screen space-y-5 bg-slate-50 p-10 pb-28 text-slate-950">
        <BikeConfig
          description={bike.bike?.description!}
          colors={bikeColors}
          frameSizes={frameSizes.map((framesize) => framesize.size!)}
          groupsets={groupsets as Groupset[]}
          wheels={wheels}
        />

        <Spacer />

        <BikeVideo id={bike.bike_details.id} />

        <BikeDescription id={bike.bike_details.id} />

        <Spacer />

        <BikeGeometry id={bike.bike_details.id} modelName={bike.bike?.name!} />

        <Spacer />

        <BikeDetails />

        <Spacer />

        <BikePerformance />
      </section>
    </>
  );
}

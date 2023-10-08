import BikeDetailsInfoClient from "~/components/BikeDetails/BikeDetailsInfoClient";
import Heading from "~/components/Heading";
import { trpc } from "~/trpc/serverClient";

export default async function BikeDetailsInfo({ id }: { id: number }) {
  const detailsInfo = await trpc.bikes.getBikeDetailInfos({
    id,
  });
  return (
    <section id="bike-details" className="flex flex-col">
      <Heading>Detaily</Heading>
      <BikeDetailsInfoClient details={detailsInfo} />
    </section>
  );
}

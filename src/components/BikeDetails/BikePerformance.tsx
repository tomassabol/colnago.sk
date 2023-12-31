import { trpc } from "~/trpc/serverClient";
import Heading from "../Heading";
import BikePerformanceCard from "./BikePerformanceCard";

export default async function BikePerformance({ id }: { id: number }) {
  const bikePerformance = await trpc.bikes.getBikePerformance({ id });
  return (
    <>
      <Heading>Výkon</Heading>
      <section
        id="bike-performance"
        className="flex flex-col justify-center gap-2 lg:flex-row"
      >
        {bikePerformance.performanceDetails.map((item) => (
          <BikePerformanceCard
            key={item.id}
            details={item.description}
            image={item.imageUrl}
            title={item.title}
          />
        ))}
      </section>
    </>
  );
}

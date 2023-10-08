import Image from "next/image";
import Cyclist from "~/assets/images/z9b_2583_optimized.jpg";
import { trpc } from "~/trpc/serverClient";
import Heading from "../Heading";
export default async function BikeDescription({ id }: { id: number }) {
  const detailsDescription = await trpc.bikes.getBikeDetailsDescription({
    id,
  });
  return (
    <>
      <section
        id="bike-description"
        className="flex flex-col gap-20 lg:flex-row"
      >
        <div className="lg:w-1/2">
          <Image src={Cyclist.src} width={1200} height={960} alt="cyclist" />
        </div>

        <div className="border-gray-950 py-10 lg:w-1/2 lg:border-t">
          <Heading>{detailsDescription.title}</Heading>
          <p>{detailsDescription.description}</p>
        </div>
      </section>
    </>
  );
}

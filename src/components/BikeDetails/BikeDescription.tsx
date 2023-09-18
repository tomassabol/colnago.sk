import Image from "next/image";
import Heading from "../Heading";

export default async function BikeDescription({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <>
      <section
        id="bike-description"
        className="flex flex-col gap-20 lg:flex-row"
      >
        <div className="lg:w-1/2">
          <Image src={image} width={1200} height={960} alt="cyclist" />
        </div>

        <div className="border-gray-950 py-10 lg:w-1/2 lg:border-t">
          <Heading>{title}</Heading>
          <p>{description}</p>
        </div>
      </section>
    </>
  );
}

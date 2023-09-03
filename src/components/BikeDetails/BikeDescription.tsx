import Image from "next/image";

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
      <section className="flex flex-col gap-20 lg:flex-row">
        <div className="lg:w-1/2">
          <Image src={image} width={1200} height={960} alt="cyclist" />
        </div>

        <div className="border-gray-950 py-10 lg:w-1/2 lg:border-t">
          <h3 className="py-4 pb-8 text-4xl font-medium italic text-[#b59251]">
            {title}
          </h3>
          <p>{description}</p>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import DetailImage from "~/assets/images/bikes/c68/c68-detail.jpg";

export default async function BikePerformanceCard({
  image,
  title,
  details,
}: {
  image: string;
  title: string;
  details: string;
}) {
  return (
    <>
      <div className="flex w-full flex-col rounded-md bg-white shadow-md md:w-1/2 lg:w-1/3">
        <Image src={DetailImage} width={1200} height={960} alt="details" />
        <div className="space-y-4 p-6">
          <label
            htmlFor="description"
            className="text-sm uppercase text-[#b59251]"
          >
            {title}
          </label>
          <span className="w-1/3 border-t" />
          <p id="description">{details}</p>
        </div>
      </div>
    </>
  );
}

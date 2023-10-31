import Image from "next/image";
import Link from "next/link";
import { Bike } from "~/db/schema";

export default function BikeCard(props: { bike: Omit<Bike, "bikeDetails"> }) {
  return (
    <div className="h-auto max-w-xs rounded-md bg-white p-4 shadow-sm transition duration-300 ease-in-out hover:cursor-pointer hover:shadow-md sm:max-w-sm md:max-w-md lg:max-w-lg">
      <Link href={`/bicykle/${props.bike.slug!}`}>
        <div className="w-xs relative h-48">
          <Image
            src={props.bike.image!}
            alt={props.bike.name!}
            layout="fill"
            objectFit="cover"
            className="rounded-t-md"
          />
        </div>
        <div className="p-2">
          <h3 className="font-bold italic text-slate-900">{props.bike.name}</h3>
          <p className="border-l-2 border-[#b59251] pl-2 text-sm text-slate-600">
            {props.bike.description}
          </p>
        </div>
      </Link>
    </div>
  );
}

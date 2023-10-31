import Image from "next/image";
import Link from "next/link";
import { Bike } from "~/db/schema";

export default function BikeCard(props: { bike: Omit<Bike, "bikeDetails"> }) {
  return (
    <>
      <Link
        key={props.bike.id}
        className="h-auto w-[300px] rounded-b-md bg-white p-4 shadow-sm transition duration-300 ease-in-out hover:cursor-pointer hover:shadow-md"
        href={`/bicykle/${props.bike.slug!}`}
      >
        <Image
          src={props.bike.image!}
          alt={props.bike.name!}
          width={300}
          height={300}
          className="w-auto"
          placeholder="empty"
        />
        <div className="space-y-2">
          <h3 className="font-bold italic text-slate-900">{props.bike.name}</h3>
          <p className="border-l-[2px]  border-[#b59251] px-2 text-sm text-slate-600">
            {props.bike.description}
          </p>
        </div>
      </Link>
    </>
  );
}

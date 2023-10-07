import Image from "next/image";
import { BikeColor } from "~/db/schema";
export default function Color({ color }: { color: BikeColor }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-y-1">
        <Image
          src={color.image!}
          alt="farba"
          className="rounded-full border border-[#b59251]"
          width={30}
          height={30}
        />
        <p className="w-10 text-center text-xs">{color.color}</p>
      </div>
    </>
  );
}

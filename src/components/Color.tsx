import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { BikeColor } from "~/db/schema";
export default function Color({
  color,
  className,
  select,
}: {
  color: BikeColor;
  className?: string;
  select: (color: BikeColor) => void;
}) {
  return (
    <div className="flex cursor-pointer flex-col items-center justify-center gap-y-1">
      <Image
        src={color.image!}
        alt="farba"
        className={twMerge("rounded-full", className)}
        width={30}
        height={30}
        onClick={() => select(color)}
      />
      <p className="w-10 text-center text-xs">{color.color}</p>
    </div>
  );
}

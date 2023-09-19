import Image from "next/image";
import Farba from "~/assets/images/farba.png";
export default function Color() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-y-1">
        <Image
          src={Farba.src}
          alt="farba"
          className="rounded-full border border-[#b59251]"
          width={30}
          height={30}
        />
        <p className="w-10 text-center text-xs">Matte Black</p>
      </div>
    </>
  );
}

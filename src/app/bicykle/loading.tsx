import Image from "next/image";
import Logo from "~/assets/images/colnago-logo.svg";
export default function Loading() {
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-black text-white">
        <Image
          src={Logo}
          alt="Colnago Logo"
          className="h-content-fit w-[8em]"
        />
        <i>Loading contents...</i>
      </div>
    </>
  );
}

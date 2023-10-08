import Geometry from "~/assets/images/geometry.jpg";

import Image from "next/image";
import { trpc } from "~/trpc/serverClient";
import BikeGeometryTable from "./BikeGeometryTable";

export default async function BikeGeometry({
  id,
  modelName,
}: {
  id: number;
  modelName: string;
}) {
  const geometry = await trpc.bikes.getBikeGeometry({ id });
  return (
    <>
      <section id="bike-geometry" className="flex flex-col gap-20 lg:flex-row">
        <div className="flex flex-col gap-y-5 lg:w-1/2">
          <Image src={Geometry.src} width={1200} height={960} alt="cyclist" />
          <div>
            <div className="flex items-end gap-0.5">
              <h3 className="text-xl font-medium italic text-[#b59251]">
                <a
                  // href="" TODO: add link to download
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  {modelName} - Veľkostná príručka
                </a>
              </h3>
              <span className="pb-1 text-xs">(26KB)</span>
            </div>
            <p className="text-xs">
              Stiahnite si príručku, aby ste mali úplný prehľad o veľkostiach a
              jednotlivých mierach
            </p>
          </div>
        </div>

        <BikeGeometryTable geometry={geometry} />
      </section>
    </>
  );
}

import Geometry from "~/assets/images/geometry.jpg";

import Image from "next/image";
import GeometryTable from "./GeometryTable";
import SizeSelector from "./SizeSelector";

export default function BikeGeometry() {
  return (
    <>
      <section className="flex flex-col gap-20 lg:flex-row">
        <div className="flex flex-col gap-y-5 lg:w-1/2">
          <Image src={Geometry} width={1200} height={960} alt="cyclist" />
          <div>
            <div className="flex items-end gap-0.5">
              <h3 className="text-xl font-medium italic text-[#b59251]">
                C68 Sloping Guide to the Sizes
              </h3>
              <span className="pb-1 text-xs">(26KB)</span>
            </div>
            <p className="text-xs">
              Download the Size Guide to have a full understanding of sizes and
              measures
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 lg:w-1/2">
          <h3 className="text-2xl font-medium italic">
            Vyberte velikost, abyste viděli všechny specifikace rámu a vyberte
            si ten, který vám vyhovuje.
          </h3>
          <SizeSelector sizes={[420, 455, 485, 510, 530, 550, 570]} />

          <GeometryTable
            data={[
              "379",
              "614.5",
              "181",
              "72",
              "593",
              "73.00",
              "414",
              "72.9",
              "584",
              "403",
            ]}
          />
        </div>
      </section>
    </>
  );
}

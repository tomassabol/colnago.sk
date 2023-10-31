"use client";
import { BikeColor, Groupset, Wheel } from "~/db/schema";
import Color from "../Color";
import FrameSize from "../FrameSize";
import GroupsetComponent from "../Groupset";
import Heading from "../Heading";
import WheelsComponent from "../Wheels";
import ImageCarousel from "./ImageCarousel";

export default function BikeConfig({
  name,
  description,
  colors,
  frameSizes,
  groupsets,
  wheels,
}: {
  name: string;
  description: string;
  colors: BikeColor[];
  frameSizes: string[];
  groupsets: Groupset[];
  wheels: Wheel[];
}) {
  return (
    <>
      <section
        id="bike-config"
        className="flex w-full flex-col gap-y-10 lg:flex-row lg:flex-wrap lg:gap-x-10"
      >
        <ImageCarousel />
        <div className="w-full flex-col gap-y-2 lg:w-max">
          <Heading>{name}</Heading>
          <h6>{description}</h6>

          <ol className="flex flex-col gap-y-4">
            <li className="space-y-2">
              <h2>1. Farba</h2>
              <div className="flex gap-x-5">
                {colors.map((color) => (
                  <Color color={color} key={color.id} />
                ))}
              </div>
            </li>
            <li className="space-y-2">
              <h2>2. Veľkosť rámu</h2>
              <FrameSize sizes={frameSizes} />
            </li>
            <li className="space-y-2">
              <h2>3. Sada</h2>
              <GroupsetComponent groupsets={groupsets} />
            </li>
            <li className="space-y-2">
              <h2>4. Kolesá</h2>
              <WheelsComponent wheels={wheels} />
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}

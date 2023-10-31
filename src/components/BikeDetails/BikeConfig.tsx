"use client";
import { useState } from "react";
import { BikeColor, BikeDetailsGallery, Groupset, Wheel } from "~/db/schema";
import Color from "../Color";
import FrameSize from "../FrameSize";
import GroupsetComponent from "../Groupset";
import WheelsComponent from "../Wheels";
import ImageCarousel from "./ImageCarousel";

export default function BikeConfig({
  name,
  description,
  colors,
  frameSizes,
  groupsets,
  wheels,
  images,
}: {
  name: string;
  description: string;
  colors: BikeColor[];
  frameSizes: string[];
  groupsets: Groupset[];
  wheels: Wheel[];
  images: BikeDetailsGallery[];
}) {
  const [selectedColor, setSelectedColor] = useState<BikeColor>(colors[0]);
  return (
    <section
      id="bike-config"
      className="flex w-full flex-col gap-y-10 lg:flex-row lg:flex-wrap lg:gap-x-10"
    >
      <ImageCarousel images={images} />
      <div className="w-full flex-col gap-y-2 lg:w-max">
        <div className="mb-10">
          <h3 className="text-4xl font-medium text-[#b59251]">{name}</h3>
          <h6>{description}</h6>
        </div>

        <ol className="flex flex-col gap-y-4">
          <li className="space-y-2">
            <p>1. Farba</p>
            <div className="flex gap-x-5">
              {colors.map((color) => (
                <Color
                  color={color}
                  key={color.id}
                  className={
                    selectedColor === color ? "border-2 border-[#b59251]" : ""
                  }
                  select={setSelectedColor}
                />
              ))}
            </div>
          </li>
          <li className="space-y-2">
            <p>2. Veľkosť rámu</p>
            <FrameSize sizes={frameSizes} />
          </li>
          <li className="space-y-2">
            <p>3. Sada</p>
            <GroupsetComponent groupsets={groupsets} />
          </li>
          <li className="space-y-2">
            <p>4. Kolesá</p>
            <WheelsComponent wheels={wheels} />
          </li>
        </ol>
      </div>
    </section>
  );
}

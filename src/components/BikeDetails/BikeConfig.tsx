"use client";
import Color from "../Color";
import FrameSize from "../FrameSize";
import Groupset from "../Groupset";
import Heading from "../Heading";
import Wheels from "../Wheels";
import ImageCarousel from "./ImageCarousel";

export default function BikeConfig() {
  return (
    <>
      <section
        id="bike-config"
        className="flex w-full flex-col gap-y-10 lg:flex-row lg:flex-wrap lg:gap-x-10"
      >
        <ImageCarousel />
        <div className="w-full flex-col gap-y-2 lg:w-max">
          <Heading>C68</Heading>
          <h6>Vrchol umění Colnago, ručně vyrobeno v Itálii</h6>

          <ol className="flex flex-col gap-y-4">
            <li className="space-y-2">
              <h2>1. Farba</h2>
              <div className="flex gap-x-5">
                <Color />
                <Color />
                <Color />
              </div>
            </li>
            <li className="space-y-2">
              <h2>2. Veľkosť rámu</h2>
              <FrameSize sizes={["420", "430", "440"]} />
            </li>
            <li className="space-y-2">
              <h2>3. Sada</h2>
              <Groupset
                groupsets={[
                  "Campagnolo Super Record EPS disc",
                  "Shimano Dura Ace R9270 Di2 disc",
                  "Shimano Ultegra R8170 Di2 disc",
                  "Sram Red eTap AXS disc",
                  "Sram Force eTap AXS disc",
                ]}
              />
            </li>
            <li className="space-y-2">
              <h2>4. Kolesá</h2>
              <Wheels
                wheels={[
                  "ENVE WS SES 3.4 CL",
                  "Campagnolo Bora Ultra WTO 45 DB CL",
                  "Shimano Dura Ace C50 DB",
                  "Fulcrum Racing Wind 400 DB",
                  "Zipp 303 Firecrest",
                  "Fulcrum Racing 600 DB",
                  "Fulcrum Racing Wind DB",
                ]}
              />
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}

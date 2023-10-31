"use client";
import React, { useState } from "react";
import { trpc } from "~/trpc/serverClient";

type Geometry = Awaited<ReturnType<typeof trpc.bikes.getBikeGeometry>>;
export default function BikeGeometryTable({
  geometry,
}: {
  geometry: Geometry;
}) {
  const [size, setSize] = useState(geometry[0].bike_sizes.size!);

  return (
    <div className="flex flex-col gap-5 lg:w-1/2">
      <h3 className="text-2xl font-medium italic">
        Vyberte veľkosť, aby ste videli všetky špecifikácie rámu a vyberte si
        ten, ktorý vám vyhovuje.
      </h3>
      <div className="flex items-center gap-2">
        <label htmlFor="size" className="uppercase text-slate-600">
          Dostupné veľkosti:
        </label>
        <select
          name="size"
          id="size"
          className="rounded-md border px-1 py-0.5"
          onChange={(e) => setSize(e.target.value)}
        >
          {geometry.map((geometry) => (
            <option
              value={geometry.bike_sizes.size!}
              key={geometry.bike_sizes.id}
            >
              {geometry.bike_sizes.size}
            </option>
          ))}
        </select>
      </div>

      <>
        <h4 className="text-xl font-medium italic text-[#b59251]">Geometria</h4>
        <table className="flex flex-col gap-x-5 md:flex-row">
          <tbody className="w-full">
            {geometry.map((geometry) =>
              geometry.bike_sizes.size === size ? (
                <React.Fragment key={crypto.randomUUID()}>
                  {Object.entries(geometry.bike_geometry!)
                    .slice(2, 7)
                    .map(([key, value]) => (
                      <tr
                        className="flex justify-between border-b"
                        key={key + value}
                      >
                        <th>{key}</th>
                        <td>{value}</td>
                      </tr>
                    ))}
                </React.Fragment>
              ) : null,
            )}
          </tbody>
          <tbody className="w-full">
            {geometry.map((geometry) =>
              geometry.bike_sizes.size === size ? (
                <React.Fragment key={crypto.randomUUID()}>
                  {Object.entries(geometry.bike_geometry!)
                    .slice(7)
                    .map(([key, value]) => (
                      <tr
                        className="flex justify-between border-b"
                        key={key + value}
                      >
                        <th>{key}</th>
                        <td>{value}</td>
                      </tr>
                    ))}
                </React.Fragment>
              ) : null,
            )}
          </tbody>
        </table>
      </>
    </div>
  );
}

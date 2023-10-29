"use client";

import { useState } from "react";
import { trpc } from "~/trpc/serverClient";

type DetailsInfo = Awaited<ReturnType<typeof trpc.bikes.getBikeDetailInfos>>;
export default function BikeDetailsInfoClient({
  details,
}: {
  details: DetailsInfo;
}) {
  const [selectedBikeDetailInfo, setSelectedBikeDetailInfo] = useState<
    DetailsInfo[number]
  >(details[0]);

  return (
    <div className="flex w-full flex-col gap-10">
      <div className="flex w-full justify-center uppercase">
        {details.map((detailInfo) => (
          <label
            key={detailInfo.id}
            onClick={() => setSelectedBikeDetailInfo(detailInfo)}
            className={
              "min-w-[10vw] cursor-pointer border-b px-5 pb-2 text-center text-sm hover:border-[#b59251] hover:text-[#b59251]" +
              (selectedBikeDetailInfo === detailInfo
                ? " border-[#b59251] text-[#b59251]"
                : null)
            }
          >
            {detailInfo.title}
          </label>
        ))}
      </div>

      <div className="flex flex-wrap gap-y-10">
        {selectedBikeDetailInfo.items.map((item) => (
          <div className="w-full p-4 lg:w-1/2" key={item.id}>
            <label htmlFor="vidlice" className="font-bold uppercase">
              {item.title}
            </label>
            <p className="whitespace-pre-line text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";

export default function Vimeo({
  children,
  src,
}: {
  children: React.ReactNode;
  src: string;
}) {
  return (
    <>
      <div className="relative pt-[56.25%]">
        <iframe
          src={src}
          className="absolute left-0 top-0 h-full w-full rounded-t-md"
          frameBorder={0}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="h-40 rounded-b-md bg-gray-950">{children}</div>
      {/* <script src="https://player.vimeo.com/api/player.js"></script> */}
    </>
  );
}

import React from "react";

export default function ButtonReusable(props: {
  children: React.ReactNode;
  variant: "primary" | "secondary";
}) {
  const style = (): string => {
    switch (props.variant) {
      case "primary":
        return "bg-[#b59251] text-white text-sm px-10 py-3 uppercase w-fit";
      case "secondary":
        return "bg-white text-slate-900 text-sm px-10 py-3 uppercase w-fit border border-black";
      default:
        return "bg-[#b59251] text-white text-sm px-10 py-3 uppercase w-fit";
    }
  };

  return (
    <>
      <button className={style()}>{props.children}</button>
    </>
  );
}

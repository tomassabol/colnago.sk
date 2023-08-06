import React from "react";

export type Address = {
  street: string;
  city: string;
  zip: string;
  telephone: string;
};
export default function Card(props: { title: string; address: Address }) {
  return (
    <>
      <div className="bg-[#b59251] flex flex-col w-fit h-fit p-10 gap-y-6">
        <h1 className="font-bold text-2xl">{props.title}</h1>

        <div className="text-sm flex  gap-4">
          <span className="border-l-[2px]" />
          <div>
            <p>Nájdete nás na adrese:</p>
            <p>{props.address.street}</p>
            <p>{props.address.zip + ", " + props.address.city}</p>
            <p>Slovensko</p>
            <p>Telefón: {props.address.telephone}</p>
          </div>
        </div>
      </div>
    </>
  );
}

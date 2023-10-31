export type Address = {
  street: string;
  city: string;
  zip: string;
  telephone: string;
};
export default function Card(props: { title: string; address: Address }) {
  return (
    <>
      <div className="flex h-fit w-fit flex-col gap-y-6 bg-[#b59251] p-10">
        <h4 className="text-2xl font-bold">{props.title}</h4>

        <div className="flex gap-4  text-sm">
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

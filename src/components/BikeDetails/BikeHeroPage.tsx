import { Bike } from "~/db/schema";
import BreadCrumbNav from "../BreadCrumbNav";

export default async function BikeHeroPage({
  bike,
  image,
}: {
  bike: Bike;
  image: string;
}) {
  return (
    <>
      <section
        className="text-white, h-[85vh] w-full"
        style={{
          background: `url('${image}') center 100% no-repeat `,
        }}
      >
        <div className="relative h-full w-screen">
          <div className="absolute bottom-[30vh] left-10 space-y-4 md:w-1/2 xl:left-20 xl:w-1/4">
            <BreadCrumbNav name={bike?.name} />
            <div className="space-y-10 pb-10">
              <p className="text-5xl font-extrabold italic">{bike?.name}</p>
              <p>{bike?.description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

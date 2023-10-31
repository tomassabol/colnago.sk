import BikeCard from "~/components/BikeCard/BikeCard";
import BreadCrumbNav from "~/components/BreadCrumbNav";
import { trpc } from "~/trpc/serverClient";

export default async function Page() {
  const bikes = await trpc.bikes.getBikes();
  if (bikes) console.log(bikes);

  return (
    <section className="h-min-screen min-h-[58vh] w-screen space-y-5 bg-slate-50 p-10 text-slate-950">
      <BreadCrumbNav />
      <div className="flex justify-center">
        <div className="grid w-full max-w-[80vw] grid-cols-1 gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {bikes.map((bike) => (
            <BikeCard bike={bike} key={bike.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

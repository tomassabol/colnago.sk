import BikeCard from "~/components/BikeCard/BikeCard";
import BreadCrumbNav from "~/components/BreadCrumbNav";
import { trpc } from "~/trpc/serverClient";

export default async function Page() {
  const bikes = await trpc.bikes.getBikes();
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  return (
    <section className="h-min-screen min-h-[58vh] w-screen space-y-5 bg-slate-50 p-10 text-slate-950">
      <BreadCrumbNav />
      <div className="flex flex-wrap gap-4">
        {bikes.map((bike) => (
          <BikeCard bike={bike} key={bike.id} />
        ))}
      </div>
    </section>
  );
}

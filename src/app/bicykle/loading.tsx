import LoadingCard from "~/components/BikeCard/LoadingCard";
import BreadCrumbNav from "~/components/BreadCrumbNav";

export default async function Loading() {
  return (
    <>
      <section className="h-min-screen min-h-[58vh] w-screen space-y-5 bg-slate-50 p-10 text-slate-950">
        <BreadCrumbNav />
        <div className="flex flex-wrap gap-4">
          {[...Array(4)].map((_, i) => (
            <LoadingCard key={i} />
          ))}
        </div>
      </section>
    </>
  );
}

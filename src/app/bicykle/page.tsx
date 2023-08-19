import BreadCrumbNav from "~/components/BreadCrumbNav";
import Bikes from "./(rsc)/Bikes";

export default function page() {
  return (
    <>
      <section className="h-min-screen min-h-[58vh] bg-slate-50 text-slate-950">
        <BreadCrumbNav />
        <Bikes />
      </section>
    </>
  );
}

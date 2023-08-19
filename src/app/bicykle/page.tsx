import BreadCrumbNav from "~/components/BreadCrumbNav";

export default function page() {
  return (
    <>
      <section className="h-min-screen min-h-[58vh] bg-white text-slate-950">
        <BreadCrumbNav />
        <p>bicykle</p>
      </section>
    </>
  );
}

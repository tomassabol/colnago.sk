import { Bike } from "~/db/schema";
import BreadCrumbNav from "../BreadCrumbNav";

export default function BikeHeroPage({ bike }: { bike: Bike }) {
  return (
    <>
      <section
        className="text-white, h-[85vh] w-full"
        style={{
          background: `url('https://s3.eu-west-1.amazonaws.com/colnago.sk/c68/c63_bck.jpg') center 100% no-repeat `,
        }}
      >
        <div className="relative h-full w-screen">
          <div className="absolute bottom-[30vh] space-y-4 md:w-1/2 xl:left-20 xl:w-1/4">
            <BreadCrumbNav />
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

import DetailImage from "~/assets/images/bikes/c68/c68-detail.jpg";
import Heading from "../Heading";
import BikePerformanceCard from "./BikePerformanceCard";

export default async function BikePerformance() {
  return (
    <>
      <Heading>Výkon</Heading>
      <section
        id="bike-performance"
        className="flex flex-col gap-12 lg:flex-row"
      >
        <BikePerformanceCard
          image={DetailImage.src}
          title="rám"
          details="C68 je vrcholem evoluce historie Colnaga, je to extrémně vyvinutá
            konstrukce, je to místo, kde se 68 let konstrukce rámu setkává s
            budoucností. C68 je prostě nový milník."
        />
        <BikePerformanceCard
          image={DetailImage.src}
          title="rám"
          details="C68 je vrcholem evoluce historie Colnaga, je to extrémně vyvinutá
            konstrukce, je to místo, kde se 68 let konstrukce rámu setkává s
            budoucností. C68 je prostě nový milník."
        />
        <BikePerformanceCard
          image={DetailImage.src}
          title="rám"
          details="C68 je vrcholem evoluce historie Colnaga, je to extrémně vyvinutá
            konstrukce, je to místo, kde se 68 let konstrukce rámu setkává s
            budoucností. C68 je prostě nový milník."
        />
      </section>
    </>
  );
}

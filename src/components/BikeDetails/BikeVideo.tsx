import { trpc } from "~/trpc/serverClient";
import Heading from "../Heading";
import Vimeo from "../Vimeo";
import VimeoDescription from "../VimeoDescription";

export default async function BikeVideo(params: { id: number }) {
  const video = await trpc.bikes.getBikeVideo({ id: params.id });
  return (
    <section
      id="bike-video"
      className="xl:[200vh] my-auto h-[60vh] sm:h-[70vh] md:h-[85vh] lg:h-[140vh]"
    >
      <Heading>Video</Heading>
      <section className="relative h-full">
        <div className="absolute w-full">
          <Vimeo src={video.video!}>
            <VimeoDescription
              title={video.title!}
              description={video.description!}
            />
          </Vimeo>
        </div>
      </section>
    </section>
  );
}

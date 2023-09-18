import Heading from "../Heading";
import Vimeo from "../Vimeo";
import VimeoDescription from "../VimeoDescription";

export default async function BikeVideo({
  video,
  title,
  description,
}: {
  video: string;
  title: string;
  description: string;
}) {
  return (
    <>
      <section
        id="bike-video"
        className="xl:[150vh] h-[60vh] sm:h-[70vh] md:h-[85vh] lg:h-[120vh]"
      >
        <Heading>Video</Heading>
        <section className="relative h-full">
          <div className="absolute w-full">
            <Vimeo src={video}>
              <VimeoDescription title={title} description={description} />
            </Vimeo>
          </div>
        </section>
      </section>
    </>
  );
}

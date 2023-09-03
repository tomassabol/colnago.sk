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
      <section className="h-[120vh]">
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

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
        <h3 className="py-4 pb-8 text-4xl font-medium text-[#b59251]">Video</h3>
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

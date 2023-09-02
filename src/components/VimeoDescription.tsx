export default function VimeoDescription({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <div className="flex h-full w-full items-center justify-center px-4 text-white">
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold italic xl:text-3xl">{title}</h3>
          <div className="flex items-center gap-x-2">
            <span className="w-[2rem] border-b-[1.5px] border-[#b59251]" />
            <p className="text-xs uppercase tracking-widest text-[#b59251] lg:text-sm">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

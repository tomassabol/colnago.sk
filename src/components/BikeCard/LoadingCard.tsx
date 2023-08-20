export default function BikeCard() {
  return (
    <>
      <div className="h-full w-auto rounded-b-md bg-white p-4">
        <div className="h-[200px] w-[300px] animate-pulse  bg-slate-200" />
        <div className="space-y-2 pt-2">
          <h3 className="w-fit animate-pulse rounded-md bg-gray-300 text-transparent">
            Loading bike title
          </h3>
          <p className="w-fit animate-pulse rounded-md bg-gray-300 px-2 text-transparent">
            Loading bike description and stuff
          </p>
        </div>
      </div>
    </>
  );
}

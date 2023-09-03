export default async function SizeSelector({ sizes }: { sizes: number[] }) {
  return (
    <>
      <div className="flex items-center gap-2">
        <label className="uppercase text-slate-600">Dostupné veľkosti:</label>
        <select name="size" id="size" className="rounded-md border">
          {sizes.map((size) => (
            <option value={size}>{size}</option>
          ))}
        </select>
      </div>
    </>
  );
}

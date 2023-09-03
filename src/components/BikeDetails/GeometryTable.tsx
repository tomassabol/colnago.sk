// TODO: improve type safety
export default function GeometryTable({ data }: { data: string[] }) {
  const tableHeader = [
    "Fork",
    "A",
    "Hs",
    "BB drop",
    "Stack",
    "Sc",
    "C",
    "Ss",
    "O",
    "Reach",
  ] as const;
  return (
    <>
      <h4 className="text-xl font-medium italic text-[#b59251]">
        Sloping geometry
      </h4>
      <table className="flex flex-col gap-x-5 md:flex-row">
        <tbody className="w-full">
          {data.slice(0, 5).map((item, index) => (
            <tr className="flex justify-between border-b" key={index}>
              <th>{tableHeader[index]}</th>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
        <tbody className="w-full">
          {data.slice(5).map((item, index) => (
            <tr className="flex justify-between border-b" key={index}>
              <th>{tableHeader[index]}</th>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

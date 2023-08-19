import { api } from "~/trpc/server-http";

export default async function Test() {
  const greeting = await api.greeting.query();
  const bikes = await api.getBikes.query();

  return (
    <>
      <h1>{greeting}</h1>
      {bikes.map((bike) => (
        <div key={bike.id}>
          <p>{bike.name}</p>
          <p>{bike.description}</p>
        </div>
      ))}
    </>
  );
}

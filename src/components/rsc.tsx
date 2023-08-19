import React from "react";
import { api } from "../trpc/server-http";

export const rsc = async () => {
  const greeting1 = await api.greeting.query({ text: "from server1" });
  const greeting2 = await api.greeting.query({ text: "from server2" });

  return (
    <div>
      <p>{greeting1 ? greeting1 : "Loading..."}</p>
    </div>
  );
};

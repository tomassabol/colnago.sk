import { api } from "~/trpc/server-http";
import { Suspense } from "react";
import { ServerHttpGreeting } from "./ServerHttpGreeting";
import { ServerInvokedGreeting } from "./ServerInvokedGreeting";

export default async function Home() {
  return (
    <>
      <div style={separator} />

      <div style={{ height: 160 }}>
        <Suspense fallback={<>Loading Server...</>}>
          <ServerHttpGreeting />
        </Suspense>
      </div>

      <div style={separator} />

      <div style={{ height: 160 }}>
        <Suspense fallback={<>Loading Server...</>}>
          <ServerInvokedGreeting />
        </Suspense>
      </div>

      <div style={separator} />
    </>
  );
}

const separator = {
  width: "50%",
  margin: "1rem 0",
  height: 2,
  background: "hsla(210, 16%, 80%, 1)",
};

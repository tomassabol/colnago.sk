import { httpBatchLink } from "@trpc/client";
import { appRouter } from "~/server";

export const trpc = appRouter.createCaller({
  links: [
    httpBatchLink({
      url: "/api/trpc",
    }),
  ],
});

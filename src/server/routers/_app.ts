import { db } from "~/db";
import { bikes } from "~/db/schema";
import { publicProcedure, router } from "../trpc";

export const appRouter = router({
  getBikes: publicProcedure.query(async () => {
    const res = await db.select().from(bikes);
    return res;
  }),
  greeting: publicProcedure.query(() => {
    return "Hello, world!";
  }),
});

export type AppRouter = typeof appRouter;

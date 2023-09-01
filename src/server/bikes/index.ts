import { eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "~/db";
import { bikeDetails, bikes } from "~/db/schema";
import { publicProcedure, router } from "../trpc";

export const bikeRouter = router({
  getBikes: publicProcedure.query(async () => {
    const res = await db
      .select({
        id: bikes.id,
        slug: bikes.slug,
        name: bikes.name,
        description: bikes.description,
        image: bikes.image,
      })
      .from(bikes);
    return res;
  }),
  getBikeBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async (opts) => {
      const res = await db
        .select()
        .from(bikes)
        .where(eq(bikes.slug, opts.input.slug))
        .limit(1)
        .rightJoin(bikeDetails, eq(bikes.bikeDetails, bikeDetails.id));
      return res[0];
    }),
});

export type AppRouter = typeof bikeRouter;

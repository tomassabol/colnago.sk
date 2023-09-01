import { bikeRouter } from "./bikes";
import { router } from "./trpc";

export const appRouter = router({
  bikes: bikeRouter,
});

export type AppRouter = typeof appRouter;

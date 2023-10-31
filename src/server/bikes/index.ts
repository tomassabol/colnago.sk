import { eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "~/db";
import {
  bikeColors,
  bikeDetailInfo,
  bikeDetailInfoItem,
  bikeDetails,
  bikeDetailsDescription,
  bikeDetailsGallery,
  bikeDetailsToColors,
  bikeDetailsToFrameSizes,
  bikeDetailsToGroupsets,
  bikeDetailsToWheels,
  bikeGeometry,
  bikePerformance,
  bikePerformanceItem,
  bikeVideo,
  bikes,
  frameSizes,
  groupset,
  wheels,
} from "~/db/schema";
import { publicProcedure, router } from "../trpc";

export const bikeRouter = router({
  // list of all bikes
  getBikes: publicProcedure.query(async () => {
    try {
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
    } catch (e) {
      throw new Error("Bikes not found");
    }
  }),

  // get a bike by slug
  getBikeBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async (opts) => {
      try {
        const res = await db
          .select()
          .from(bikes)
          .where(eq(bikes.slug, opts.input.slug))
          .limit(1)
          .rightJoin(bikeDetails, eq(bikes.bikeDetails, bikeDetails.id));
        return res[0];
      } catch (e) {
        throw new Error("Bike not found");
      }
    }),

  // get bike colors
  getBikeColors: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async (opts) => {
      try {
        const res = await db
          .select()
          .from(bikeDetailsToColors)
          .where(eq(bikeDetailsToColors.bikeDetailsId, opts.input.id))
          .rightJoin(
            bikeColors,
            eq(bikeDetailsToColors.bikeColorsId, bikeColors.id),
          );
        return res.map((color) => color.bike_colors);
      } catch (e) {
        throw new Error("Bike not found");
      }
    }),

  // get bike sizes
  getBikeSizes: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async (opts) => {
      try {
        const res = await db
          .select()
          .from(bikeDetailsToFrameSizes)
          .where(eq(bikeDetailsToFrameSizes.bikeDetailsId, opts.input.id))
          .rightJoin(
            frameSizes,
            eq(bikeDetailsToFrameSizes.frameSizesId, frameSizes.id),
          );
        return res.map((size) => size.bike_sizes);
      } catch (e) {
        throw new Error("Bike not found");
      }
    }),

  // get groupsets
  getBikeGroupsets: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async (opts) => {
      try {
        const res = await db
          .select()
          .from(bikeDetailsToGroupsets)
          .where(eq(bikeDetailsToGroupsets.bikeDetailsId, opts.input.id))
          .leftJoin(
            groupset,
            eq(bikeDetailsToGroupsets.groupsetId, groupset.id),
          );
        return res.map((groupset) => groupset.groupset!);
      } catch (e) {
        throw new Error("Bike not found");
      }
    }),

  // get bike wheels
  getBikeWheels: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async (opts) => {
      try {
        const res = await db
          .select()
          .from(bikeDetailsToWheels)
          .where(eq(bikeDetailsToWheels.bikeDetailsId, opts.input.id))
          .rightJoin(wheels, eq(bikeDetailsToWheels.wheelsId, wheels.id));
        return res.map((wheels) => wheels.wheels);
      } catch (e) {
        throw new Error("Bike not found");
      }
    }),

  // get bike video
  getBikeVideo: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async (opts) => {
      try {
        const res = await db
          .select()
          .from(bikeVideo)
          .where(eq(bikeVideo.bikeDetailsId, opts.input.id));
        return res[0];
      } catch (e) {
        throw new Error("Bike not found");
      }
    }),

  // get bike detials description
  getBikeDetailsDescription: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async (opts) => {
      try {
        const res = await db
          .select()
          .from(bikeDetailsDescription)
          .where(eq(bikeDetailsDescription.bikeDetailsId, opts.input.id));
        return res[0];
      } catch (e) {
        throw new Error("Bike not found");
      }
    }),

  // get bike geometry
  getBikeGeometry: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async (opts) => {
      try {
        const res = await db
          .select()
          .from(bikeGeometry)
          .where(eq(bikeGeometry.bikeDetailsId, opts.input.id))
          .rightJoin(frameSizes, eq(bikeGeometry.frameSizesId, frameSizes.id));
        return res;
      } catch (e) {
        throw new Error("Bike not found");
      }
    }),

  // get bike detail infos
  getBikeDetailInfos: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async (opts) => {
      try {
        const res = await db
          .select()
          .from(bikeDetailInfo)
          .where(eq(bikeDetailInfo.bikeDetailsId, opts.input.id))
          .then(async (res) => {
            return await Promise.all(
              res.map(async (info) => {
                const res = await db
                  .select()
                  .from(bikeDetailInfoItem)
                  .where(eq(bikeDetailInfoItem.bikeDetailInfoId, info.id));
                return { ...info, items: res };
              }),
            );
          });

        return res;
      } catch (e) {
        throw new Error("Bike not found");
      }
    }),

  // get bike performance
  getBikePerformance: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async (opts) => {
      try {
        const res = (
          await db
            .select()
            .from(bikePerformance)
            .where(eq(bikePerformance.bikeDetailsId, opts.input.id))
        )[0];
        const performanceDetails = await db
          .select()
          .from(bikePerformanceItem)
          .where(eq(bikePerformanceItem.bikePerformanceId, res.id));
        return { ...res, performanceDetails };
      } catch (e) {
        throw new Error("Bike not found");
      }
    }),

  getBikeImages: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async (opts) => {
      try {
        const res = await db
          .select()
          .from(bikeDetailsGallery)
          .where(eq(bikeDetailsGallery.bikeDetailsId, opts.input.id));
        return res;
      } catch (e) {
        throw new Error("Bike not found");
      }
    }),
});

export type AppRouter = typeof bikeRouter;

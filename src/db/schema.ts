import { InferModel, relations } from "drizzle-orm";
import { pgTable, primaryKey, serial, text, uuid } from "drizzle-orm/pg-core";

// bikes
export const bikes = pgTable("bike", {
  id: uuid("id").primaryKey(),
  slug: text("slug").unique(),
  name: text("name"),
  description: text("description"),
  image: text("image"),
  bikeDetails: serial("bike_details")
    .unique()
    .references(() => bikeDetails.id),
});
export type Bike = InferModel<typeof bikes>;
export const bikeRelations = relations(bikes, ({ one }) => ({
  bikeDetails: one(bikeDetails, {
    fields: [bikes.bikeDetails],
    references: [bikeDetails.id],
  }),
}));

// bike details
export const bikeDetails = pgTable("bike_details", {
  id: serial("id").primaryKey().unique(),
  bg_image: text("bg_image"),
  colors: serial("colors"),
});
export type BikeDetails = InferModel<typeof bikeDetails>;
export const bikeDetailsRelations = relations(bikeDetails, ({ many }) => ({
  bikeDetailsToColors: many(bikeDetailsToColors),
  bikeDetailsToFrameSizes: many(bikeDetailsToFrameSizes),
  bikeDetailsToGroupsets: many(bikeDetailsToGroupsets),
}));

// bike details to colors
export const bikeDetailsToColors = pgTable(
  "bike_details_to_colors",
  {
    bikeDetailsId: serial("bike_details_id").references(() => bikeDetails.id),
    bikeColorsId: serial("bike_colors_id").references(() => bikeColors.id),
  },
  (t) => ({
    pk: primaryKey(t.bikeDetailsId, t.bikeColorsId),
  }),
);
export type BikeDetailsToColors = InferModel<typeof bikeDetailsToColors>;
export const bikeDetailsToColorsRelations = relations(
  bikeDetailsToColors,
  ({ one }) => ({
    bikeDetails: one(bikeDetails, {
      fields: [bikeDetailsToColors.bikeDetailsId],
      references: [bikeDetails.id],
    }),
    bikeColors: one(bikeColors, {
      fields: [bikeDetailsToColors.bikeColorsId],
      references: [bikeColors.id],
    }),
  }),
);

// bike details to frame sizes
export const bikeDetailsToFrameSizes = pgTable(
  "bike_details_to_frame_sizes",
  {
    bikeDetailsId: serial("bike_details_id").references(() => bikeDetails.id),
    frameSizesId: serial("frame_sizes_id").references(() => frameSizes.id),
  },
  (t) => ({
    pk: primaryKey(t.bikeDetailsId, t.frameSizesId),
  }),
);
export const bikeDetailsToFrameSizesRelations = relations(
  bikeDetailsToFrameSizes,
  ({ one }) => ({
    bikeDetails: one(bikeDetails, {
      fields: [bikeDetailsToFrameSizes.bikeDetailsId],
      references: [bikeDetails.id],
    }),
    frameSizes: one(frameSizes, {
      fields: [bikeDetailsToFrameSizes.frameSizesId],
      references: [frameSizes.id],
    }),
  }),
);

// bike details to groupsets
export const bikeDetailsToGroupsets = pgTable(
  "bike_details_to_groupsets",
  {
    bikeDetailsId: serial("bike_details_id").references(() => bikeDetails.id),
    groupsetId: serial("groupset_id").references(() => groupset.id),
  },
  (t) => ({
    pk: primaryKey(t.bikeDetailsId, t.groupsetId),
  }),
);
export const bikeDetailsToGroupsetsRelations = relations(
  bikeDetailsToGroupsets,
  ({ one }) => ({
    bikeDetails: one(bikeDetails, {
      fields: [bikeDetailsToGroupsets.bikeDetailsId],
      references: [bikeDetails.id],
    }),
    groupset: one(groupset, {
      fields: [bikeDetailsToGroupsets.groupsetId],
      references: [groupset.id],
    }),
  }),
);

// bike colors
export const bikeColors = pgTable("bike_colors", {
  id: serial("id").primaryKey().unique(),
  color: text("color"),
  image: text("image"),
});
export type BikeColor = InferModel<typeof bikeColors>;
export const bikeColorsRelations = relations(bikeColors, ({ many }) => ({
  bikeDetailsToColors: many(bikeDetailsToColors),
}));

// frame sizes
export const frameSizes = pgTable("bike_sizes", {
  id: serial("id").primaryKey().unique(),
  bikeId: uuid("bike_id").references(() => bikes.id),
});
export type FrameSize = InferModel<typeof frameSizes>;
export const frameSizesRelations = relations(frameSizes, ({ many }) => ({
  bikeDetailsToFrameSizes: many(bikeDetailsToFrameSizes),
}));

export const groupset = pgTable("groupset", {
  id: serial("id").primaryKey().unique(),
  name: text("name"),
});
export type Groupset = InferModel<typeof groupset>;
export const groupsetRelations = relations(groupset, ({ many }) => ({
  bikeDetailsToGroupsets: many(bikeDetailsToGroupsets),
}));

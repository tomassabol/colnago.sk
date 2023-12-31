import { InferSelectModel, relations } from "drizzle-orm";
import {
  decimal,
  pgTable,
  primaryKey,
  serial,
  text,
  uuid,
} from "drizzle-orm/pg-core";

// bikes
export const bikes = pgTable("bike", {
  id: uuid("id").primaryKey(),
  slug: text("slug").unique().notNull(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  bikeDetails: serial("bike_details"),
});
export type Bike = InferSelectModel<typeof bikes>;
export const bikeRelations = relations(bikes, ({ one }) => ({
  bikeDetails: one(bikeDetails, {
    fields: [bikes.bikeDetails],
    references: [bikeDetails.id],
  }),
}));

// bike details
export const bikeDetails = pgTable("bike_details", {
  id: serial("id").primaryKey().unique(),
  bg_image: text("bg_image").notNull(),
});
export type BikeDetails = InferSelectModel<typeof bikeDetails>;
export const bikeDetailsRelations = relations(bikeDetails, ({ one, many }) => ({
  bikeDetailsToColors: many(bikeDetailsToColors),
  bikeDetailsToFrameSizes: many(bikeDetailsToFrameSizes),
  bikeDetailsToGroupsets: many(bikeDetailsToGroupsets),
  bikeDetailsToWheels: many(bikeDetailsToWheels),
  bikeGeometry: many(bikeGeometry),
  bike: one(bikes, {
    fields: [bikeDetails.id],
    references: [bikes.bikeDetails],
  }),
  bikeVideo: one(bikeVideo, {
    fields: [bikeDetails.id],
    references: [bikeVideo.bikeDetailsId],
  }),
  bikeDetailsDescription: one(bikeDetailsDescription, {
    fields: [bikeDetails.id],
    references: [bikeDetailsDescription.bikeDetailsId],
  }),
  sizeGuide: one(sizeGuide, {
    fields: [bikeDetails.id],
    references: [sizeGuide.bikeDetailsId],
  }),
  bikeDetailInfo: one(bikeDetailInfo, {
    fields: [bikeDetails.id],
    references: [bikeDetailInfo.bikeDetailsId],
  }),
}));

export const bikeDetailsGallery = pgTable("bike_details_gallery", {
  id: serial("id").primaryKey().unique(),
  bikeDetailsId: serial("bike_details_id").references(() => bikeDetails.id),
  imageUrl: text("image_url").notNull(),
  // colorTag: text("color_tag"),
});
export type BikeDetailsGallery = InferSelectModel<typeof bikeDetailsGallery>;

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
export type BikeDetailsToColors = InferSelectModel<typeof bikeDetailsToColors>;
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
    fileSizesGuideUrl: text("file_sizes_guide_url").notNull(),
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

// bike details to wheels
export const bikeDetailsToWheels = pgTable(
  "bike_details_to_wheels",
  {
    bikeDetailsId: serial("bike_details_id").references(() => bikeDetails.id),
    wheelsId: serial("wheels_id").references(() => wheels.id),
  },
  (t) => ({
    pk: primaryKey(t.bikeDetailsId, t.wheelsId),
  }),
);
export const bikeDetailsToWheelsRelations = relations(
  bikeDetailsToWheels,
  ({ one }) => ({
    bikeDetails: one(bikeDetails, {
      fields: [bikeDetailsToWheels.bikeDetailsId],
      references: [bikeDetails.id],
    }),
    wheels: one(wheels, {
      fields: [bikeDetailsToWheels.wheelsId],
      references: [wheels.id],
    }),
  }),
);

// bike colors
export const bikeColors = pgTable("bike_colors", {
  id: serial("id").primaryKey().unique(),
  color: text("color").notNull(),
  image: text("image").notNull(),
});
export type BikeColor = InferSelectModel<typeof bikeColors>;
export const bikeColorsRelations = relations(bikeColors, ({ many }) => ({
  bikeDetailsToColors: many(bikeDetailsToColors),
}));

// frame sizes
export const frameSizes = pgTable("bike_sizes", {
  id: serial("id").primaryKey().unique(),
  bikeId: uuid("bike_id")
    .references(() => bikes.id)
    .notNull(),
  size: text("size").notNull(),
});
export type FrameSize = InferSelectModel<typeof frameSizes>;
export const frameSizesRelations = relations(frameSizes, ({ many }) => ({
  bikeDetailsToFrameSizes: many(bikeDetailsToFrameSizes),
  frameSizes: many(bikeGeometry),
}));

// groupsets
export const groupset = pgTable("groupset", {
  id: serial("id").primaryKey().unique(),
  name: text("name").notNull(),
});
export type Groupset = InferSelectModel<typeof groupset>;
export const groupsetRelations = relations(groupset, ({ many }) => ({
  bikeDetailsToGroupsets: many(bikeDetailsToGroupsets),
}));

// wheels
export const wheels = pgTable("wheels", {
  id: serial("id").primaryKey().unique(),
  name: text("name").notNull(),
});
export type Wheel = InferSelectModel<typeof wheels>;
export const wheelsRelations = relations(wheels, ({ many }) => ({
  bikeDetailsToWheels: many(bikeDetailsToWheels),
}));

// bike video
export const bikeVideo = pgTable("bike_video", {
  id: serial("id").primaryKey().unique(),
  bikeDetailsId: serial("bike_details_id")
    .references(() => bikeDetails.id)
    .notNull(),
  video: text("video").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
});
export type BikeVideo = InferSelectModel<typeof bikeVideo>;
export const bikeVideoRelations = relations(bikeVideo, ({ one }) => ({
  bikeDetails: one(bikeDetails, {
    fields: [bikeVideo.bikeDetailsId],
    references: [bikeDetails.id],
  }),
}));

// bike details description
export const bikeDetailsDescription = pgTable("bike_details_description", {
  id: serial("id").primaryKey().unique(),
  bikeDetailsId: serial("bike_details_id")
    .references(() => bikeDetails.id)
    .notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
});
export type BikeDetailsDescription = InferSelectModel<
  typeof bikeDetailsDescription
>;
export const bikeDetailsDescriptionRelations = relations(
  bikeDetailsDescription,
  ({ one }) => ({
    bikeDetails: one(bikeDetails, {
      fields: [bikeDetailsDescription.bikeDetailsId],
      references: [bikeDetails.id],
    }),
  }),
);

// bike geometry
export const bikeGeometry = pgTable(
  "bike_geometry",
  {
    frameSizesId: serial("frame_sizes_id").references(() => frameSizes.id),
    bikeDetailsId: serial("bike_details_id").references(() => bikeDetails.id),
    fork: decimal("fork").notNull(),
    a: decimal("a").notNull(),
    hs: decimal("hs").notNull(),
    bbDrop: decimal("bb_drop").notNull(),
    stack: decimal("stack").notNull(),
    sc: decimal("sc").notNull(),
    c: decimal("c").notNull(),
    ss: decimal("ss").notNull(),
    o: decimal("o").notNull(),
    reach: decimal("reach").notNull(),
  },
  (t) => ({
    pk: primaryKey(t.frameSizesId, t.bikeDetailsId),
  }),
);
export type BikeGeometry = InferSelectModel<typeof bikeGeometry>;
export const bikeGeometryRelations = relations(bikeGeometry, ({ one }) => ({
  frameSizes: one(frameSizes, {
    fields: [bikeGeometry.frameSizesId],
    references: [frameSizes.id],
  }),
  bikeDetails: one(bikeDetails, {
    fields: [bikeGeometry.bikeDetailsId],
    references: [bikeDetails.id],
  }),
}));

// size guide
export const sizeGuide = pgTable("size_guide", {
  id: serial("id").primaryKey().unique(),
  bikeDetailsId: serial("bike_details_id").references(() => bikeDetails.id),
  url: text("url").notNull(),
});
export type SizeGuide = InferSelectModel<typeof sizeGuide>;
export const sizeGuideRelations = relations(sizeGuide, ({ one }) => ({
  bikeDetails: one(bikeDetails, {
    fields: [sizeGuide.bikeDetailsId],
    references: [bikeDetails.id],
  }),
}));

// bike detail info
export const bikeDetailInfo = pgTable("bike_detail_info", {
  id: serial("id").primaryKey().unique(),
  bikeDetailsId: serial("bike_details_id").references(() => bikeDetails.id),
  title: text("title").notNull(),
});
export type BikeDetailInfo = InferSelectModel<typeof bikeDetailInfo>;
export const bikeDetailInfoRelations = relations(
  bikeDetailInfo,
  ({ one, many }) => ({
    bikeDetailInfoItem: many(bikeDetailInfoItem),
    bikeDetails: one(bikeDetails, {
      fields: [bikeDetailInfo.bikeDetailsId],
      references: [bikeDetails.id],
    }),
  }),
);

// bike detail info item
export const bikeDetailInfoItem = pgTable(
  "bike_detail_info_item",
  {
    id: serial("id").unique(),
    bikeDetailInfoId: serial("bike_detail_info_id").references(
      () => bikeDetailInfo.id,
    ),
    title: text("title"),
    description: text("description").notNull(),
  },
  (t) => ({
    pk: primaryKey(t.bikeDetailInfoId, t.id),
  }),
);
export type BikeDetailInfoItem = InferSelectModel<typeof bikeDetailInfoItem>;
export const bikeDetailInfoItemRelations = relations(
  bikeDetailInfoItem,
  ({ one }) => ({
    bikeDetailInfo: one(bikeDetailInfo, {
      fields: [bikeDetailInfoItem.bikeDetailInfoId],
      references: [bikeDetailInfo.id],
    }),
  }),
);

// bike performance
export const bikePerformance = pgTable("bike_performance", {
  id: serial("id").primaryKey().unique(),
  bikeDetailsId: serial("bike_details_id").references(() => bikeDetails.id),
});
export type BikePerformance = InferSelectModel<typeof bikePerformance>;
export const bikePerformanceRelations = relations(
  bikePerformance,
  ({ one, many }) => ({
    bikePerformanceItem: many(bikePerformanceItem),
    bikeDetails: one(bikeDetails, {
      fields: [bikePerformance.bikeDetailsId],
      references: [bikeDetails.id],
    }),
  }),
);

// bike performance item
export const bikePerformanceItem = pgTable(
  "bike_performance_item",
  {
    id: serial("id").unique(),
    bikePerformanceId: serial("bike_performance_id").references(
      () => bikePerformance.id,
    ),
    imageUrl: text("image_url").notNull(),
    title: text("title").notNull(),
    description: text("description").notNull(),
  },
  (t) => ({
    pk: primaryKey(t.bikePerformanceId, t.id),
  }),
);
export type BikePerformanceItem = InferSelectModel<typeof bikePerformanceItem>;
export const bikePerformanceItemRelations = relations(
  bikePerformanceItem,
  ({ one }) => ({
    bikePerformance: one(bikePerformance, {
      fields: [bikePerformanceItem.bikePerformanceId],
      references: [bikePerformance.id],
    }),
  }),
);

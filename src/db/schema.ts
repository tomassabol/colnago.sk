import { InferModel } from "drizzle-orm";
import { pgTable, serial, text, uuid } from "drizzle-orm/pg-core";

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

export const bikeDetails = pgTable("bike_details", {
  id: serial("id").primaryKey().unique(),
  bg_image: text("bg_image"),
});
export type BikeDetails = InferModel<typeof bikeDetails>;

export const bikeColors = pgTable("bike_colors", {
  id: serial("id").primaryKey().unique(),
  bikeId: uuid("bike_id").references(() => bikes.id),
  color: text("color"),
  image: text("image"),
});
export type BikeColor = InferModel<typeof bikeColors>;

export const frameSizes = pgTable("bike_sizes", {
  id: serial("id").primaryKey().unique(),
  bikeId: uuid("bike_id").references(() => bikes.id),
  size: text("size"),
});
export type FrameSize = InferModel<typeof frameSizes>;

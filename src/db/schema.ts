import { InferModel } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const bikes = pgTable("bike", {
  id: uuid("id").primaryKey(),
  slug: text("slug").unique(),
  name: text("name"),
  description: text("description"),
  image: text("image"),
});
export type Bike = InferModel<typeof bikes>;

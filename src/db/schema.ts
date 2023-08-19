import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const bikes = pgTable("bike", {
  id: uuid("id").primaryKey(),
  name: text("name"),
  description: text("description"),
  image: text("image"),
});

import "dotenv/config";
import type { Config } from "drizzle-kit";
import { env } from "./env.mjs";

export default {
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: env.DB!,
  },
  breakpoints: true,
} satisfies Config;

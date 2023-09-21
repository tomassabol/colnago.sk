ALTER TABLE "bike" DROP CONSTRAINT "bike_bike_details_unique";--> statement-breakpoint
ALTER TABLE "bike" DROP CONSTRAINT "bike_bike_details_bike_details_id_fk";
--> statement-breakpoint
ALTER TABLE "bike_details" DROP COLUMN IF EXISTS "colors";
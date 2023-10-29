CREATE TABLE IF NOT EXISTS "bike_details_gallery" (
	"id" serial PRIMARY KEY NOT NULL,
	"bike_details_id" serial NOT NULL,
	"image_url" text NOT NULL,
	CONSTRAINT "bike_details_gallery_id_unique" UNIQUE("id")
);
--> statement-breakpoint
ALTER TABLE "bike_details_to_frame_sizes" ADD COLUMN "file_sizes_guide_url" text NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bike_details_gallery" ADD CONSTRAINT "bike_details_gallery_bike_details_id_bike_details_id_fk" FOREIGN KEY ("bike_details_id") REFERENCES "bike_details"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

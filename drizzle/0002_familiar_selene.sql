CREATE TABLE IF NOT EXISTS "bike_colors" (
	"id" serial PRIMARY KEY NOT NULL,
	"color" text,
	"image" text,
	CONSTRAINT "bike_colors_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bike_details" (
	"id" serial PRIMARY KEY NOT NULL,
	"bg_image" text,
	"colors" serial NOT NULL,
	CONSTRAINT "bike_details_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bike_details_to_colors" (
	"bike_details_id" serial NOT NULL,
	"bike_colors_id" serial NOT NULL,
	CONSTRAINT bike_details_to_colors_bike_details_id_bike_colors_id PRIMARY KEY("bike_details_id","bike_colors_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bike_details_to_frame_sizes" (
	"bike_details_id" serial NOT NULL,
	"frame_sizes_id" serial NOT NULL,
	CONSTRAINT bike_details_to_frame_sizes_bike_details_id_frame_sizes_id PRIMARY KEY("bike_details_id","frame_sizes_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bike_details_to_groupsets" (
	"bike_details_id" serial NOT NULL,
	"groupset_id" serial NOT NULL,
	CONSTRAINT bike_details_to_groupsets_bike_details_id_groupset_id PRIMARY KEY("bike_details_id","groupset_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bike" (
	"id" uuid PRIMARY KEY NOT NULL,
	"slug" text,
	"name" text,
	"description" text,
	"image" text,
	"bike_details" serial NOT NULL,
	CONSTRAINT "bike_slug_unique" UNIQUE("slug"),
	CONSTRAINT "bike_bike_details_unique" UNIQUE("bike_details")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bike_sizes" (
	"id" serial PRIMARY KEY NOT NULL,
	"bike_id" uuid,
	CONSTRAINT "bike_sizes_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "groupset" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	CONSTRAINT "groupset_id_unique" UNIQUE("id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bike_details_to_colors" ADD CONSTRAINT "bike_details_to_colors_bike_details_id_bike_details_id_fk" FOREIGN KEY ("bike_details_id") REFERENCES "bike_details"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bike_details_to_colors" ADD CONSTRAINT "bike_details_to_colors_bike_colors_id_bike_colors_id_fk" FOREIGN KEY ("bike_colors_id") REFERENCES "bike_colors"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bike_details_to_frame_sizes" ADD CONSTRAINT "bike_details_to_frame_sizes_bike_details_id_bike_details_id_fk" FOREIGN KEY ("bike_details_id") REFERENCES "bike_details"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bike_details_to_frame_sizes" ADD CONSTRAINT "bike_details_to_frame_sizes_frame_sizes_id_bike_sizes_id_fk" FOREIGN KEY ("frame_sizes_id") REFERENCES "bike_sizes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bike_details_to_groupsets" ADD CONSTRAINT "bike_details_to_groupsets_bike_details_id_bike_details_id_fk" FOREIGN KEY ("bike_details_id") REFERENCES "bike_details"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bike_details_to_groupsets" ADD CONSTRAINT "bike_details_to_groupsets_groupset_id_groupset_id_fk" FOREIGN KEY ("groupset_id") REFERENCES "groupset"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bike" ADD CONSTRAINT "bike_bike_details_bike_details_id_fk" FOREIGN KEY ("bike_details") REFERENCES "bike_details"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bike_sizes" ADD CONSTRAINT "bike_sizes_bike_id_bike_id_fk" FOREIGN KEY ("bike_id") REFERENCES "bike"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

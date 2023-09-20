CREATE TABLE IF NOT EXISTS "bike_detail_info" (
	"id" serial PRIMARY KEY NOT NULL,
	"bike_details_id" serial NOT NULL,
	"title" text,
	CONSTRAINT "bike_detail_info_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bike_detail_info_item" (
	"id" serial NOT NULL,
	"bike_detail_info_id" serial NOT NULL,
	"title" text,
	"description" text,
	CONSTRAINT bike_detail_info_item_bike_detail_info_id_id PRIMARY KEY("bike_detail_info_id","id"),
	CONSTRAINT "bike_detail_info_item_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bike_details_description" (
	"id" serial PRIMARY KEY NOT NULL,
	"bike_details_id" serial NOT NULL,
	"title" text,
	"description" text,
	CONSTRAINT "bike_details_description_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bike_details_to_wheels" (
	"bike_details_id" serial NOT NULL,
	"wheels_id" serial NOT NULL,
	CONSTRAINT bike_details_to_wheels_bike_details_id_wheels_id PRIMARY KEY("bike_details_id","wheels_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bike_geometry" (
	"frame_sizes_id" serial NOT NULL,
	"bike_details_id" serial NOT NULL,
	"fork" integer,
	"a" integer,
	"hs" integer,
	"bb_drop" integer,
	"stack" integer,
	"sc" integer,
	"c" integer,
	"ss" integer,
	"o" integer,
	"reach" integer,
	CONSTRAINT bike_geometry_frame_sizes_id_bike_details_id PRIMARY KEY("frame_sizes_id","bike_details_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bike_performance" (
	"id" serial PRIMARY KEY NOT NULL,
	"bike_details_id" serial NOT NULL,
	CONSTRAINT "bike_performance_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bike_performance_item" (
	"id" serial NOT NULL,
	"bike_performance_id" serial NOT NULL,
	"image_url" text,
	"title" text,
	"description" text,
	CONSTRAINT bike_performance_item_bike_performance_id_id PRIMARY KEY("bike_performance_id","id"),
	CONSTRAINT "bike_performance_item_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bike_video" (
	"id" serial PRIMARY KEY NOT NULL,
	"bike_details_id" serial NOT NULL,
	"video" text,
	"title" text,
	"description" text,
	CONSTRAINT "bike_video_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "size_guide" (
	"id" serial PRIMARY KEY NOT NULL,
	"bike_details_id" serial NOT NULL,
	"url" text,
	CONSTRAINT "size_guide_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "wheels" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	CONSTRAINT "wheels_id_unique" UNIQUE("id")
);
--> statement-breakpoint
ALTER TABLE "bike_sizes" ADD COLUMN "size" integer;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bike_detail_info" ADD CONSTRAINT "bike_detail_info_bike_details_id_bike_details_id_fk" FOREIGN KEY ("bike_details_id") REFERENCES "bike_details"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bike_detail_info_item" ADD CONSTRAINT "bike_detail_info_item_bike_detail_info_id_bike_detail_info_id_fk" FOREIGN KEY ("bike_detail_info_id") REFERENCES "bike_detail_info"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bike_details_description" ADD CONSTRAINT "bike_details_description_bike_details_id_bike_details_id_fk" FOREIGN KEY ("bike_details_id") REFERENCES "bike_details"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bike_details_to_wheels" ADD CONSTRAINT "bike_details_to_wheels_bike_details_id_bike_details_id_fk" FOREIGN KEY ("bike_details_id") REFERENCES "bike_details"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bike_details_to_wheels" ADD CONSTRAINT "bike_details_to_wheels_wheels_id_wheels_id_fk" FOREIGN KEY ("wheels_id") REFERENCES "wheels"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bike_geometry" ADD CONSTRAINT "bike_geometry_frame_sizes_id_bike_sizes_id_fk" FOREIGN KEY ("frame_sizes_id") REFERENCES "bike_sizes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bike_geometry" ADD CONSTRAINT "bike_geometry_bike_details_id_bike_details_id_fk" FOREIGN KEY ("bike_details_id") REFERENCES "bike_details"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bike_performance" ADD CONSTRAINT "bike_performance_bike_details_id_bike_details_id_fk" FOREIGN KEY ("bike_details_id") REFERENCES "bike_details"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bike_performance_item" ADD CONSTRAINT "bike_performance_item_bike_performance_id_bike_performance_id_fk" FOREIGN KEY ("bike_performance_id") REFERENCES "bike_performance"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bike_video" ADD CONSTRAINT "bike_video_bike_details_id_bike_details_id_fk" FOREIGN KEY ("bike_details_id") REFERENCES "bike_details"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "size_guide" ADD CONSTRAINT "size_guide_bike_details_id_bike_details_id_fk" FOREIGN KEY ("bike_details_id") REFERENCES "bike_details"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

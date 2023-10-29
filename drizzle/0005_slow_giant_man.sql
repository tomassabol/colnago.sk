ALTER TABLE "bike_colors" ALTER COLUMN "color" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bike_colors" ALTER COLUMN "image" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bike_detail_info" ALTER COLUMN "title" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bike_detail_info_item" ALTER COLUMN "description" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bike_details" ALTER COLUMN "bg_image" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bike_details_description" ALTER COLUMN "title" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bike_details_description" ALTER COLUMN "description" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bike_geometry" ALTER COLUMN "fork" SET DATA TYPE numeric;--> statement-breakpoint
ALTER TABLE "bike_geometry" ALTER COLUMN "fork" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bike_geometry" ALTER COLUMN "a" SET DATA TYPE numeric;--> statement-breakpoint
ALTER TABLE "bike_geometry" ALTER COLUMN "a" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bike_geometry" ALTER COLUMN "hs" SET DATA TYPE numeric;--> statement-breakpoint
ALTER TABLE "bike_geometry" ALTER COLUMN "hs" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bike_geometry" ALTER COLUMN "bb_drop" SET DATA TYPE numeric;--> statement-breakpoint
ALTER TABLE "bike_geometry" ALTER COLUMN "bb_drop" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bike_geometry" ALTER COLUMN "stack" SET DATA TYPE numeric;--> statement-breakpoint
ALTER TABLE "bike_geometry" ALTER COLUMN "stack" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bike_geometry" ALTER COLUMN "sc" SET DATA TYPE numeric;--> statement-breakpoint
ALTER TABLE "bike_geometry" ALTER COLUMN "sc" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bike_geometry" ALTER COLUMN "c" SET DATA TYPE numeric;--> statement-breakpoint
ALTER TABLE "bike_geometry" ALTER COLUMN "c" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bike_geometry" ALTER COLUMN "ss" SET DATA TYPE numeric;--> statement-breakpoint
ALTER TABLE "bike_geometry" ALTER COLUMN "ss" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bike_geometry" ALTER COLUMN "o" SET DATA TYPE numeric;--> statement-breakpoint
ALTER TABLE "bike_geometry" ALTER COLUMN "o" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bike_geometry" ALTER COLUMN "reach" SET DATA TYPE numeric;--> statement-breakpoint
ALTER TABLE "bike_geometry" ALTER COLUMN "reach" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bike_performance_item" ALTER COLUMN "image_url" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bike_performance_item" ALTER COLUMN "title" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bike_performance_item" ALTER COLUMN "description" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bike_video" ALTER COLUMN "video" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bike_video" ALTER COLUMN "title" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bike_video" ALTER COLUMN "description" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bike" ALTER COLUMN "slug" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bike" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bike" ALTER COLUMN "description" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bike" ALTER COLUMN "image" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bike_sizes" ALTER COLUMN "bike_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bike_sizes" ALTER COLUMN "size" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "groupset" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "size_guide" ALTER COLUMN "url" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "wheels" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "bike_details_description" ADD COLUMN "image_url" text NOT NULL;
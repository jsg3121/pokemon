-- AlterTable
ALTER TABLE "pokemon" ALTER COLUMN "type" SET NOT NULL,
ALTER COLUMN "type" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "pokemon_region" ALTER COLUMN "type" SET NOT NULL,
ALTER COLUMN "type" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "type_relation" ALTER COLUMN "strong" SET NOT NULL,
ALTER COLUMN "strong" SET DATA TYPE TEXT,
ALTER COLUMN "weak" SET NOT NULL,
ALTER COLUMN "weak" SET DATA TYPE TEXT;

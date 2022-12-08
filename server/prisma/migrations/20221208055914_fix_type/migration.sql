-- AlterTable
ALTER TABLE "type_relation" ADD COLUMN     "invalidity" TEXT,
ALTER COLUMN "strong" DROP NOT NULL,
ALTER COLUMN "weak" DROP NOT NULL;

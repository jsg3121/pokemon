/*
  Warnings:

  - The `is_evolution` column on the `pokemon` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "pokemon" ADD COLUMN     "evolution_id" INTEGER[],
DROP COLUMN "is_evolution",
ADD COLUMN     "is_evolution" BOOLEAN NOT NULL DEFAULT false;

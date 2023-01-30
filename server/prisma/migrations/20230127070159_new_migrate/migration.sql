/*
  Warnings:

  - The `type` column on the `pokemon_region` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `generation` to the `pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pokemon" ADD COLUMN     "generation" INTEGER NOT NULL,
ADD COLUMN     "is_evolution" INTEGER[];

-- AlterTable
ALTER TABLE "pokemon_region" DROP COLUMN "type",
ADD COLUMN     "type" TEXT[];

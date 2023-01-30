/*
  Warnings:

  - You are about to drop the column `region_form` on the `pokemon` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "pokemon" DROP COLUMN "region_form",
ADD COLUMN     "is_region" BOOLEAN DEFAULT false;

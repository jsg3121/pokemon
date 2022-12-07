/*
  Warnings:

  - Added the required column `pokemon_number` to the `pokemon_region` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pokemon_region" ADD COLUMN     "pokemon_number" INTEGER NOT NULL;

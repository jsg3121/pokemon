/*
  Warnings:

  - Added the required column `number` to the `pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pokemon" ADD COLUMN     "number" INTEGER NOT NULL;

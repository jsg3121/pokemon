/*
  Warnings:

  - A unique constraint covering the columns `[number]` on the table `pokemon` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "pokemon_mega" DROP CONSTRAINT "pokemon_mega_pokemon_id_fkey";

-- DropForeignKey
ALTER TABLE "pokemon_region" DROP CONSTRAINT "pokemon_region_pokemon_id_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "pokemon_number_key" ON "pokemon"("number");

-- AddForeignKey
ALTER TABLE "pokemon_region" ADD CONSTRAINT "pokemon_region_pokemon_id_fkey" FOREIGN KEY ("pokemon_id") REFERENCES "pokemon"("number") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_mega" ADD CONSTRAINT "pokemon_mega_pokemon_id_fkey" FOREIGN KEY ("pokemon_id") REFERENCES "pokemon"("number") ON DELETE RESTRICT ON UPDATE CASCADE;

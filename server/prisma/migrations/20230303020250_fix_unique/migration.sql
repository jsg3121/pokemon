/*
  Warnings:

  - A unique constraint covering the columns `[pokemon_number]` on the table `pokemon_mega` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[pokemon_number]` on the table `pokemon_region` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "pokemon_mega_pokemon_number_key" ON "pokemon_mega"("pokemon_number");

-- CreateIndex
CREATE UNIQUE INDEX "pokemon_region_pokemon_number_key" ON "pokemon_region"("pokemon_number");

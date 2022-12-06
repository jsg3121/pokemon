/*
  Warnings:

  - You are about to drop the `PokemonRegion` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PokemonRegion" DROP CONSTRAINT "PokemonRegion_pokemon_id_fkey";

-- DropTable
DROP TABLE "PokemonRegion";

-- CreateTable
CREATE TABLE "pokemon_region" (
    "id" SERIAL NOT NULL,
    "pokemon_id" SERIAL NOT NULL,
    "region" VARCHAR(20) NOT NULL,
    "type" TEXT[],
    "type_single1" VARCHAR(20) NOT NULL,
    "type_single2" VARCHAR(20) NOT NULL,

    CONSTRAINT "pokemon_region_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pokemon_region_id_key" ON "pokemon_region"("id");

-- CreateIndex
CREATE UNIQUE INDEX "pokemon_region_pokemon_id_key" ON "pokemon_region"("pokemon_id");

-- AddForeignKey
ALTER TABLE "pokemon_region" ADD CONSTRAINT "pokemon_region_pokemon_id_fkey" FOREIGN KEY ("pokemon_id") REFERENCES "pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

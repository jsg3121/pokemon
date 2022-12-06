-- CreateTable
CREATE TABLE "PokemonRegion" (
    "id" SERIAL NOT NULL,
    "pokemon_id" SERIAL NOT NULL,
    "region" VARCHAR(20) NOT NULL,
    "type" TEXT[],
    "type_single1" VARCHAR(20) NOT NULL,
    "type_single2" VARCHAR(20) NOT NULL,

    CONSTRAINT "PokemonRegion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PokemonRegion_id_key" ON "PokemonRegion"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PokemonRegion_pokemon_id_key" ON "PokemonRegion"("pokemon_id");

-- AddForeignKey
ALTER TABLE "PokemonRegion" ADD CONSTRAINT "PokemonRegion_pokemon_id_fkey" FOREIGN KEY ("pokemon_id") REFERENCES "pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AlterTable
ALTER TABLE "pokemon" ADD COLUMN     "is_mega" BOOLEAN DEFAULT false;

-- CreateTable
CREATE TABLE "pokemon_mega" (
    "id" SERIAL NOT NULL,
    "pokemon_id" SERIAL NOT NULL,
    "pokemon_number" INTEGER NOT NULL,
    "type" TEXT[],
    "type_single1" VARCHAR(20) NOT NULL,
    "type_single2" VARCHAR(20) NOT NULL,

    CONSTRAINT "pokemon_mega_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pokemon_mega_id_key" ON "pokemon_mega"("id");

-- CreateIndex
CREATE UNIQUE INDEX "pokemon_mega_pokemon_id_key" ON "pokemon_mega"("pokemon_id");

-- AddForeignKey
ALTER TABLE "pokemon_mega" ADD CONSTRAINT "pokemon_mega_pokemon_id_fkey" FOREIGN KEY ("pokemon_id") REFERENCES "pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

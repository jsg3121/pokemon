/*
  Warnings:

  - You are about to drop the `Pokemon` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Pokemon";

-- CreateTable
CREATE TABLE "pokemon" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "type" TEXT[],
    "region_form" BOOLEAN NOT NULL DEFAULT false,
    "type_single1" VARCHAR(20) NOT NULL,
    "type_single2" VARCHAR(20) NOT NULL,

    CONSTRAINT "pokemon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "type_relation" (
    "id" SERIAL NOT NULL,
    "type" VARCHAR(20) NOT NULL,
    "strong" TEXT[],
    "weak" TEXT[],

    CONSTRAINT "type_relation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pokemon_id_key" ON "pokemon"("id");

-- CreateIndex
CREATE UNIQUE INDEX "type_relation_id_key" ON "type_relation"("id");

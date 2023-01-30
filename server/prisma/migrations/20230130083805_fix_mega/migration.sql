-- DropIndex
DROP INDEX "pokemon_mega_pokemon_id_key";

-- AlterTable
ALTER TABLE "pokemon_mega" ALTER COLUMN "pokemon_id" DROP DEFAULT;
DROP SEQUENCE "pokemon_mega_pokemon_id_seq";

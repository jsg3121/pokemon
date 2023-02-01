import * as TypeGraphQL from "type-graphql";

export enum PokemonRegionScalarFieldEnum {
  id = "id",
  pokemonId = "pokemonId",
  pokemonNumber = "pokemonNumber",
  region = "region",
  type = "type",
  typeSingle1 = "typeSingle1",
  typeSingle2 = "typeSingle2"
}
TypeGraphQL.registerEnumType(PokemonRegionScalarFieldEnum, {
  name: "PokemonRegionScalarFieldEnum",
  description: undefined,
});

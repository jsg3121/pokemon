import * as TypeGraphQL from "type-graphql";

export enum PokemonNormalFormScalarFieldEnum {
  id = "id",
  pokemonId = "pokemonId",
  type = "type",
  typeSingle1 = "typeSingle1",
  typeSingle2 = "typeSingle2"
}
TypeGraphQL.registerEnumType(PokemonNormalFormScalarFieldEnum, {
  name: "PokemonNormalFormScalarFieldEnum",
  description: undefined,
});

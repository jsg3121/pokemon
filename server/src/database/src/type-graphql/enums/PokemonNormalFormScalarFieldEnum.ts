import * as TypeGraphQL from "type-graphql";

export enum PokemonNormalFormScalarFieldEnum {
  id = "id",
  pokemonId = "pokemonId",
  name = "name",
  type = "type",
  typeSingle1 = "typeSingle1",
  typeSingle2 = "typeSingle2",
  imagePath = "imagePath"
}
TypeGraphQL.registerEnumType(PokemonNormalFormScalarFieldEnum, {
  name: "PokemonNormalFormScalarFieldEnum",
  description: undefined,
});

import * as TypeGraphQL from "type-graphql";

export enum PokemonMegaScalarFieldEnum {
  id = "id",
  pokemonId = "pokemonId",
  pokemonNumber = "pokemonNumber",
  type = "type",
  typeSingle1 = "typeSingle1",
  typeSingle2 = "typeSingle2"
}
TypeGraphQL.registerEnumType(PokemonMegaScalarFieldEnum, {
  name: "PokemonMegaScalarFieldEnum",
  description: undefined,
});

import * as TypeGraphQL from "type-graphql";

export enum PokemonScalarFieldEnum {
  id = "id",
  number = "number",
  name = "name",
  type = "type",
  isRegion = "isRegion",
  isMega = "isMega",
  typeSingle1 = "typeSingle1",
  typeSingle2 = "typeSingle2",
  isEvolution = "isEvolution",
  evolutionId = "evolutionId",
  generation = "generation"
}
TypeGraphQL.registerEnumType(PokemonScalarFieldEnum, {
  name: "PokemonScalarFieldEnum",
  description: undefined,
});

import * as TypeGraphQL from "type-graphql";

export enum NormalStatsScalarFieldEnum {
  id = "id",
  pokemonId = "pokemonId",
  hp = "hp",
  attack = "attack",
  defense = "defense",
  specialAttack = "specialAttack",
  specialDefense = "specialDefense",
  speed = "speed",
  total = "total"
}
TypeGraphQL.registerEnumType(NormalStatsScalarFieldEnum, {
  name: "NormalStatsScalarFieldEnum",
  description: undefined,
});

import * as TypeGraphQL from "type-graphql";

export enum MegaStatsScalarFieldEnum {
  id = "id",
  statCode = "statCode",
  hp = "hp",
  attack = "attack",
  defense = "defense",
  specialAttack = "specialAttack",
  specialDefense = "specialDefense",
  speed = "speed",
  total = "total"
}
TypeGraphQL.registerEnumType(MegaStatsScalarFieldEnum, {
  name: "MegaStatsScalarFieldEnum",
  description: undefined,
});

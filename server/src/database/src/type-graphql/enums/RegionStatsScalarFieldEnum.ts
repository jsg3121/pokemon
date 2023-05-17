import * as TypeGraphQL from "type-graphql";

export enum RegionStatsScalarFieldEnum {
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
TypeGraphQL.registerEnumType(RegionStatsScalarFieldEnum, {
  name: "RegionStatsScalarFieldEnum",
  description: undefined,
});

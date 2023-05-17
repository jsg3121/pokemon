import * as TypeGraphQL from "type-graphql";

export enum FormStatsScalarFieldEnum {
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
TypeGraphQL.registerEnumType(FormStatsScalarFieldEnum, {
  name: "FormStatsScalarFieldEnum",
  description: undefined,
});

import * as TypeGraphQL from "type-graphql";

export enum TypeRelationScalarFieldEnum {
  id = "id",
  type = "type",
  strong = "strong",
  weak = "weak",
  invalidity = "invalidity"
}
TypeGraphQL.registerEnumType(TypeRelationScalarFieldEnum, {
  name: "TypeRelationScalarFieldEnum",
  description: undefined,
});

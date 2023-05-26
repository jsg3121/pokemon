import * as TypeGraphQL from "type-graphql";

export enum UseCountScalarFieldEnum {
  id = "id",
  totalCount = "totalCount",
  todayCount = "todayCount"
}
TypeGraphQL.registerEnumType(UseCountScalarFieldEnum, {
  name: "UseCountScalarFieldEnum",
  description: undefined,
});

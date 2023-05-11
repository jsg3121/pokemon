import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormStatsWhereInput } from "../inputs/FormStatsWhereInput";

@TypeGraphQL.InputType("FormStatsListRelationFilter", {
  isAbstract: true
})
export class FormStatsListRelationFilter {
  @TypeGraphQL.Field(_type => FormStatsWhereInput, {
    nullable: true
  })
  every?: FormStatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => FormStatsWhereInput, {
    nullable: true
  })
  some?: FormStatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => FormStatsWhereInput, {
    nullable: true
  })
  none?: FormStatsWhereInput | undefined;
}

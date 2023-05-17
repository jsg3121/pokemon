import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NormalStatsWhereInput } from "../inputs/NormalStatsWhereInput";

@TypeGraphQL.InputType("NormalStatsRelationFilter", {
  isAbstract: true
})
export class NormalStatsRelationFilter {
  @TypeGraphQL.Field(_type => NormalStatsWhereInput, {
    nullable: true
  })
  is?: NormalStatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => NormalStatsWhereInput, {
    nullable: true
  })
  isNot?: NormalStatsWhereInput | undefined;
}

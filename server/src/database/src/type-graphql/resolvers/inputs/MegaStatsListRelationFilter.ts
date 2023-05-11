import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MegaStatsWhereInput } from "../inputs/MegaStatsWhereInput";

@TypeGraphQL.InputType("MegaStatsListRelationFilter", {
  isAbstract: true
})
export class MegaStatsListRelationFilter {
  @TypeGraphQL.Field(_type => MegaStatsWhereInput, {
    nullable: true
  })
  every?: MegaStatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => MegaStatsWhereInput, {
    nullable: true
  })
  some?: MegaStatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => MegaStatsWhereInput, {
    nullable: true
  })
  none?: MegaStatsWhereInput | undefined;
}

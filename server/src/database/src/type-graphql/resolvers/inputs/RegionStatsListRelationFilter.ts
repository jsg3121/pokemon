import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionStatsWhereInput } from "../inputs/RegionStatsWhereInput";

@TypeGraphQL.InputType("RegionStatsListRelationFilter", {
  isAbstract: true
})
export class RegionStatsListRelationFilter {
  @TypeGraphQL.Field(_type => RegionStatsWhereInput, {
    nullable: true
  })
  every?: RegionStatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => RegionStatsWhereInput, {
    nullable: true
  })
  some?: RegionStatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => RegionStatsWhereInput, {
    nullable: true
  })
  none?: RegionStatsWhereInput | undefined;
}

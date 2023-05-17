import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RegionStatsCreateInput } from "../../../inputs/RegionStatsCreateInput";
import { RegionStatsUpdateInput } from "../../../inputs/RegionStatsUpdateInput";
import { RegionStatsWhereUniqueInput } from "../../../inputs/RegionStatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneRegionStatsArgs {
  @TypeGraphQL.Field(_type => RegionStatsWhereUniqueInput, {
    nullable: false
  })
  where!: RegionStatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => RegionStatsCreateInput, {
    nullable: false
  })
  create!: RegionStatsCreateInput;

  @TypeGraphQL.Field(_type => RegionStatsUpdateInput, {
    nullable: false
  })
  update!: RegionStatsUpdateInput;
}

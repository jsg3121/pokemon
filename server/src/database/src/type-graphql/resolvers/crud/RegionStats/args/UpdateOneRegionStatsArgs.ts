import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RegionStatsUpdateInput } from "../../../inputs/RegionStatsUpdateInput";
import { RegionStatsWhereUniqueInput } from "../../../inputs/RegionStatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneRegionStatsArgs {
  @TypeGraphQL.Field(_type => RegionStatsUpdateInput, {
    nullable: false
  })
  data!: RegionStatsUpdateInput;

  @TypeGraphQL.Field(_type => RegionStatsWhereUniqueInput, {
    nullable: false
  })
  where!: RegionStatsWhereUniqueInput;
}

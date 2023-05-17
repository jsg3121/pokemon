import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RegionStatsOrderByWithAggregationInput } from "../../../inputs/RegionStatsOrderByWithAggregationInput";
import { RegionStatsScalarWhereWithAggregatesInput } from "../../../inputs/RegionStatsScalarWhereWithAggregatesInput";
import { RegionStatsWhereInput } from "../../../inputs/RegionStatsWhereInput";
import { RegionStatsScalarFieldEnum } from "../../../../enums/RegionStatsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByRegionStatsArgs {
  @TypeGraphQL.Field(_type => RegionStatsWhereInput, {
    nullable: true
  })
  where?: RegionStatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RegionStatsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: RegionStatsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionStatsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "statCode" | "hp" | "attack" | "defense" | "specialAttack" | "specialDefense" | "speed" | "total">;

  @TypeGraphQL.Field(_type => RegionStatsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: RegionStatsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

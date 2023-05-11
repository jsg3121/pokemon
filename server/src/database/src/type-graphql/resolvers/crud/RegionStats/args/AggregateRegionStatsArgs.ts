import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RegionStatsOrderByWithRelationInput } from "../../../inputs/RegionStatsOrderByWithRelationInput";
import { RegionStatsWhereInput } from "../../../inputs/RegionStatsWhereInput";
import { RegionStatsWhereUniqueInput } from "../../../inputs/RegionStatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateRegionStatsArgs {
  @TypeGraphQL.Field(_type => RegionStatsWhereInput, {
    nullable: true
  })
  where?: RegionStatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RegionStatsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: RegionStatsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => RegionStatsWhereUniqueInput, {
    nullable: true
  })
  cursor?: RegionStatsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

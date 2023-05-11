import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionStatsAvgAggregate } from "../outputs/RegionStatsAvgAggregate";
import { RegionStatsCountAggregate } from "../outputs/RegionStatsCountAggregate";
import { RegionStatsMaxAggregate } from "../outputs/RegionStatsMaxAggregate";
import { RegionStatsMinAggregate } from "../outputs/RegionStatsMinAggregate";
import { RegionStatsSumAggregate } from "../outputs/RegionStatsSumAggregate";

@TypeGraphQL.ObjectType("AggregateRegionStats", {
  isAbstract: true
})
export class AggregateRegionStats {
  @TypeGraphQL.Field(_type => RegionStatsCountAggregate, {
    nullable: true
  })
  _count!: RegionStatsCountAggregate | null;

  @TypeGraphQL.Field(_type => RegionStatsAvgAggregate, {
    nullable: true
  })
  _avg!: RegionStatsAvgAggregate | null;

  @TypeGraphQL.Field(_type => RegionStatsSumAggregate, {
    nullable: true
  })
  _sum!: RegionStatsSumAggregate | null;

  @TypeGraphQL.Field(_type => RegionStatsMinAggregate, {
    nullable: true
  })
  _min!: RegionStatsMinAggregate | null;

  @TypeGraphQL.Field(_type => RegionStatsMaxAggregate, {
    nullable: true
  })
  _max!: RegionStatsMaxAggregate | null;
}

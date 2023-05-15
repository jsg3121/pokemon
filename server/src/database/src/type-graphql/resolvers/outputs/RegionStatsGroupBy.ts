import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionStatsAvgAggregate } from "../outputs/RegionStatsAvgAggregate";
import { RegionStatsCountAggregate } from "../outputs/RegionStatsCountAggregate";
import { RegionStatsMaxAggregate } from "../outputs/RegionStatsMaxAggregate";
import { RegionStatsMinAggregate } from "../outputs/RegionStatsMinAggregate";
import { RegionStatsSumAggregate } from "../outputs/RegionStatsSumAggregate";

@TypeGraphQL.ObjectType("RegionStatsGroupBy", {
  isAbstract: true,
  simpleResolvers: true
})
export class RegionStatsGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  statCode!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  hp!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  attack!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  defense!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  specialAttack!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  specialDefense!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  speed!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  total!: number;

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

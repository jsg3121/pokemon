import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NormalStatsAvgAggregate } from "../outputs/NormalStatsAvgAggregate";
import { NormalStatsCountAggregate } from "../outputs/NormalStatsCountAggregate";
import { NormalStatsMaxAggregate } from "../outputs/NormalStatsMaxAggregate";
import { NormalStatsMinAggregate } from "../outputs/NormalStatsMinAggregate";
import { NormalStatsSumAggregate } from "../outputs/NormalStatsSumAggregate";

@TypeGraphQL.ObjectType("AggregateNormalStats", {
  isAbstract: true
})
export class AggregateNormalStats {
  @TypeGraphQL.Field(_type => NormalStatsCountAggregate, {
    nullable: true
  })
  _count!: NormalStatsCountAggregate | null;

  @TypeGraphQL.Field(_type => NormalStatsAvgAggregate, {
    nullable: true
  })
  _avg!: NormalStatsAvgAggregate | null;

  @TypeGraphQL.Field(_type => NormalStatsSumAggregate, {
    nullable: true
  })
  _sum!: NormalStatsSumAggregate | null;

  @TypeGraphQL.Field(_type => NormalStatsMinAggregate, {
    nullable: true
  })
  _min!: NormalStatsMinAggregate | null;

  @TypeGraphQL.Field(_type => NormalStatsMaxAggregate, {
    nullable: true
  })
  _max!: NormalStatsMaxAggregate | null;
}

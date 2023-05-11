import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MegaStatsAvgAggregate } from "../outputs/MegaStatsAvgAggregate";
import { MegaStatsCountAggregate } from "../outputs/MegaStatsCountAggregate";
import { MegaStatsMaxAggregate } from "../outputs/MegaStatsMaxAggregate";
import { MegaStatsMinAggregate } from "../outputs/MegaStatsMinAggregate";
import { MegaStatsSumAggregate } from "../outputs/MegaStatsSumAggregate";

@TypeGraphQL.ObjectType("AggregateMegaStats", {
  isAbstract: true
})
export class AggregateMegaStats {
  @TypeGraphQL.Field(_type => MegaStatsCountAggregate, {
    nullable: true
  })
  _count!: MegaStatsCountAggregate | null;

  @TypeGraphQL.Field(_type => MegaStatsAvgAggregate, {
    nullable: true
  })
  _avg!: MegaStatsAvgAggregate | null;

  @TypeGraphQL.Field(_type => MegaStatsSumAggregate, {
    nullable: true
  })
  _sum!: MegaStatsSumAggregate | null;

  @TypeGraphQL.Field(_type => MegaStatsMinAggregate, {
    nullable: true
  })
  _min!: MegaStatsMinAggregate | null;

  @TypeGraphQL.Field(_type => MegaStatsMaxAggregate, {
    nullable: true
  })
  _max!: MegaStatsMaxAggregate | null;
}

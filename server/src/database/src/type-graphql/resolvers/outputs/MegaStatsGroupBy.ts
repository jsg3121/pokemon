import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MegaStatsAvgAggregate } from "../outputs/MegaStatsAvgAggregate";
import { MegaStatsCountAggregate } from "../outputs/MegaStatsCountAggregate";
import { MegaStatsMaxAggregate } from "../outputs/MegaStatsMaxAggregate";
import { MegaStatsMinAggregate } from "../outputs/MegaStatsMinAggregate";
import { MegaStatsSumAggregate } from "../outputs/MegaStatsSumAggregate";

@TypeGraphQL.ObjectType("MegaStatsGroupBy", {
  isAbstract: true,
  simpleResolvers: true
})
export class MegaStatsGroupBy {
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

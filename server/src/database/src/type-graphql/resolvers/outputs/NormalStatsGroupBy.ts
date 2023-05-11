import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NormalStatsAvgAggregate } from "../outputs/NormalStatsAvgAggregate";
import { NormalStatsCountAggregate } from "../outputs/NormalStatsCountAggregate";
import { NormalStatsMaxAggregate } from "../outputs/NormalStatsMaxAggregate";
import { NormalStatsMinAggregate } from "../outputs/NormalStatsMinAggregate";
import { NormalStatsSumAggregate } from "../outputs/NormalStatsSumAggregate";

@TypeGraphQL.ObjectType("NormalStatsGroupBy", {
  isAbstract: true
})
export class NormalStatsGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokemonId!: number;

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

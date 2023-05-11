import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormStatsAvgAggregate } from "../outputs/FormStatsAvgAggregate";
import { FormStatsCountAggregate } from "../outputs/FormStatsCountAggregate";
import { FormStatsMaxAggregate } from "../outputs/FormStatsMaxAggregate";
import { FormStatsMinAggregate } from "../outputs/FormStatsMinAggregate";
import { FormStatsSumAggregate } from "../outputs/FormStatsSumAggregate";

@TypeGraphQL.ObjectType("FormStatsGroupBy", {
  isAbstract: true
})
export class FormStatsGroupBy {
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

  @TypeGraphQL.Field(_type => FormStatsCountAggregate, {
    nullable: true
  })
  _count!: FormStatsCountAggregate | null;

  @TypeGraphQL.Field(_type => FormStatsAvgAggregate, {
    nullable: true
  })
  _avg!: FormStatsAvgAggregate | null;

  @TypeGraphQL.Field(_type => FormStatsSumAggregate, {
    nullable: true
  })
  _sum!: FormStatsSumAggregate | null;

  @TypeGraphQL.Field(_type => FormStatsMinAggregate, {
    nullable: true
  })
  _min!: FormStatsMinAggregate | null;

  @TypeGraphQL.Field(_type => FormStatsMaxAggregate, {
    nullable: true
  })
  _max!: FormStatsMaxAggregate | null;
}

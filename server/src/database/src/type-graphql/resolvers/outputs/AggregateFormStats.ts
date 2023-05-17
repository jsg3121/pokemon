import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormStatsAvgAggregate } from "../outputs/FormStatsAvgAggregate";
import { FormStatsCountAggregate } from "../outputs/FormStatsCountAggregate";
import { FormStatsMaxAggregate } from "../outputs/FormStatsMaxAggregate";
import { FormStatsMinAggregate } from "../outputs/FormStatsMinAggregate";
import { FormStatsSumAggregate } from "../outputs/FormStatsSumAggregate";

@TypeGraphQL.ObjectType("AggregateFormStats", {
  isAbstract: true,
  simpleResolvers: true
})
export class AggregateFormStats {
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

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeRelationAvgAggregate } from "../outputs/TypeRelationAvgAggregate";
import { TypeRelationCountAggregate } from "../outputs/TypeRelationCountAggregate";
import { TypeRelationMaxAggregate } from "../outputs/TypeRelationMaxAggregate";
import { TypeRelationMinAggregate } from "../outputs/TypeRelationMinAggregate";
import { TypeRelationSumAggregate } from "../outputs/TypeRelationSumAggregate";

@TypeGraphQL.ObjectType("AggregateTypeRelation", {
  isAbstract: true
})
export class AggregateTypeRelation {
  @TypeGraphQL.Field(_type => TypeRelationCountAggregate, {
    nullable: true
  })
  _count!: TypeRelationCountAggregate | null;

  @TypeGraphQL.Field(_type => TypeRelationAvgAggregate, {
    nullable: true
  })
  _avg!: TypeRelationAvgAggregate | null;

  @TypeGraphQL.Field(_type => TypeRelationSumAggregate, {
    nullable: true
  })
  _sum!: TypeRelationSumAggregate | null;

  @TypeGraphQL.Field(_type => TypeRelationMinAggregate, {
    nullable: true
  })
  _min!: TypeRelationMinAggregate | null;

  @TypeGraphQL.Field(_type => TypeRelationMaxAggregate, {
    nullable: true
  })
  _max!: TypeRelationMaxAggregate | null;
}

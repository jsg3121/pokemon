import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UseCountAvgAggregate } from "../outputs/UseCountAvgAggregate";
import { UseCountCountAggregate } from "../outputs/UseCountCountAggregate";
import { UseCountMaxAggregate } from "../outputs/UseCountMaxAggregate";
import { UseCountMinAggregate } from "../outputs/UseCountMinAggregate";
import { UseCountSumAggregate } from "../outputs/UseCountSumAggregate";

@TypeGraphQL.ObjectType("UseCountGroupBy", {
  isAbstract: true,
  simpleResolvers: true
})
export class UseCountGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  totalCount!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  todayCount!: number;

  @TypeGraphQL.Field(_type => UseCountCountAggregate, {
    nullable: true
  })
  _count!: UseCountCountAggregate | null;

  @TypeGraphQL.Field(_type => UseCountAvgAggregate, {
    nullable: true
  })
  _avg!: UseCountAvgAggregate | null;

  @TypeGraphQL.Field(_type => UseCountSumAggregate, {
    nullable: true
  })
  _sum!: UseCountSumAggregate | null;

  @TypeGraphQL.Field(_type => UseCountMinAggregate, {
    nullable: true
  })
  _min!: UseCountMinAggregate | null;

  @TypeGraphQL.Field(_type => UseCountMaxAggregate, {
    nullable: true
  })
  _max!: UseCountMaxAggregate | null;
}

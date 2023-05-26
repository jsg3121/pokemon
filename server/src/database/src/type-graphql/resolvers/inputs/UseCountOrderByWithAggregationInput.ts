import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UseCountAvgOrderByAggregateInput } from "../inputs/UseCountAvgOrderByAggregateInput";
import { UseCountCountOrderByAggregateInput } from "../inputs/UseCountCountOrderByAggregateInput";
import { UseCountMaxOrderByAggregateInput } from "../inputs/UseCountMaxOrderByAggregateInput";
import { UseCountMinOrderByAggregateInput } from "../inputs/UseCountMinOrderByAggregateInput";
import { UseCountSumOrderByAggregateInput } from "../inputs/UseCountSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UseCountOrderByWithAggregationInput", {
  isAbstract: true
})
export class UseCountOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  totalCount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  todayCount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => UseCountCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: UseCountCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UseCountAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: UseCountAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UseCountMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: UseCountMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UseCountMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: UseCountMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UseCountSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: UseCountSumOrderByAggregateInput | undefined;
}

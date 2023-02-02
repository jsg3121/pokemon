import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TypeRelationAvgOrderByAggregateInput } from "../inputs/TypeRelationAvgOrderByAggregateInput";
import { TypeRelationCountOrderByAggregateInput } from "../inputs/TypeRelationCountOrderByAggregateInput";
import { TypeRelationMaxOrderByAggregateInput } from "../inputs/TypeRelationMaxOrderByAggregateInput";
import { TypeRelationMinOrderByAggregateInput } from "../inputs/TypeRelationMinOrderByAggregateInput";
import { TypeRelationSumOrderByAggregateInput } from "../inputs/TypeRelationSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TypeRelationOrderByWithAggregationInput", {
  isAbstract: true
})
export class TypeRelationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  strong?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  weak?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  invalidity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TypeRelationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TypeRelationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypeRelationAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TypeRelationAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypeRelationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TypeRelationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypeRelationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TypeRelationMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TypeRelationSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TypeRelationSumOrderByAggregateInput | undefined;
}

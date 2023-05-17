import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormStatsAvgOrderByAggregateInput } from "../inputs/FormStatsAvgOrderByAggregateInput";
import { FormStatsCountOrderByAggregateInput } from "../inputs/FormStatsCountOrderByAggregateInput";
import { FormStatsMaxOrderByAggregateInput } from "../inputs/FormStatsMaxOrderByAggregateInput";
import { FormStatsMinOrderByAggregateInput } from "../inputs/FormStatsMinOrderByAggregateInput";
import { FormStatsSumOrderByAggregateInput } from "../inputs/FormStatsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("FormStatsOrderByWithAggregationInput", {
  isAbstract: true
})
export class FormStatsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  statCode?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  hp?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  attack?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  defense?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  specialAttack?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  specialDefense?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  speed?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  total?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => FormStatsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: FormStatsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FormStatsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: FormStatsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FormStatsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: FormStatsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FormStatsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: FormStatsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => FormStatsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: FormStatsSumOrderByAggregateInput | undefined;
}

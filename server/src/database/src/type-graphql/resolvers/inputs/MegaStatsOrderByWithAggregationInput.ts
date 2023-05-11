import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MegaStatsAvgOrderByAggregateInput } from "../inputs/MegaStatsAvgOrderByAggregateInput";
import { MegaStatsCountOrderByAggregateInput } from "../inputs/MegaStatsCountOrderByAggregateInput";
import { MegaStatsMaxOrderByAggregateInput } from "../inputs/MegaStatsMaxOrderByAggregateInput";
import { MegaStatsMinOrderByAggregateInput } from "../inputs/MegaStatsMinOrderByAggregateInput";
import { MegaStatsSumOrderByAggregateInput } from "../inputs/MegaStatsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MegaStatsOrderByWithAggregationInput", {
  isAbstract: true
})
export class MegaStatsOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => MegaStatsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MegaStatsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MegaStatsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MegaStatsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MegaStatsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MegaStatsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MegaStatsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MegaStatsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MegaStatsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MegaStatsSumOrderByAggregateInput | undefined;
}

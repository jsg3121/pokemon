import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NormalStatsAvgOrderByAggregateInput } from "../inputs/NormalStatsAvgOrderByAggregateInput";
import { NormalStatsCountOrderByAggregateInput } from "../inputs/NormalStatsCountOrderByAggregateInput";
import { NormalStatsMaxOrderByAggregateInput } from "../inputs/NormalStatsMaxOrderByAggregateInput";
import { NormalStatsMinOrderByAggregateInput } from "../inputs/NormalStatsMinOrderByAggregateInput";
import { NormalStatsSumOrderByAggregateInput } from "../inputs/NormalStatsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("NormalStatsOrderByWithAggregationInput", {
  isAbstract: true
})
export class NormalStatsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  pokemonId?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => NormalStatsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: NormalStatsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NormalStatsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: NormalStatsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NormalStatsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: NormalStatsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NormalStatsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: NormalStatsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => NormalStatsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: NormalStatsSumOrderByAggregateInput | undefined;
}

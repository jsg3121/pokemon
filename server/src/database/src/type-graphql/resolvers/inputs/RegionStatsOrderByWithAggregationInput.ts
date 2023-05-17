import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionStatsAvgOrderByAggregateInput } from "../inputs/RegionStatsAvgOrderByAggregateInput";
import { RegionStatsCountOrderByAggregateInput } from "../inputs/RegionStatsCountOrderByAggregateInput";
import { RegionStatsMaxOrderByAggregateInput } from "../inputs/RegionStatsMaxOrderByAggregateInput";
import { RegionStatsMinOrderByAggregateInput } from "../inputs/RegionStatsMinOrderByAggregateInput";
import { RegionStatsSumOrderByAggregateInput } from "../inputs/RegionStatsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RegionStatsOrderByWithAggregationInput", {
  isAbstract: true
})
export class RegionStatsOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => RegionStatsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: RegionStatsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RegionStatsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: RegionStatsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RegionStatsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: RegionStatsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RegionStatsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: RegionStatsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => RegionStatsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: RegionStatsSumOrderByAggregateInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAvgOrderByAggregateInput } from "../inputs/PokemonAvgOrderByAggregateInput";
import { PokemonCountOrderByAggregateInput } from "../inputs/PokemonCountOrderByAggregateInput";
import { PokemonMaxOrderByAggregateInput } from "../inputs/PokemonMaxOrderByAggregateInput";
import { PokemonMinOrderByAggregateInput } from "../inputs/PokemonMinOrderByAggregateInput";
import { PokemonSumOrderByAggregateInput } from "../inputs/PokemonSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonOrderByWithAggregationInput", {
  isAbstract: true
})
export class PokemonOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  number?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isRegion?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isMega?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  typeSingle1?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  typeSingle2?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isEvolution?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  evolutionId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  generation?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonSumOrderByAggregateInput | undefined;
}

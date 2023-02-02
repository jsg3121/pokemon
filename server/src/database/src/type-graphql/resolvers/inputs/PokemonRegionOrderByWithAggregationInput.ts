import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonRegionAvgOrderByAggregateInput } from "../inputs/PokemonRegionAvgOrderByAggregateInput";
import { PokemonRegionCountOrderByAggregateInput } from "../inputs/PokemonRegionCountOrderByAggregateInput";
import { PokemonRegionMaxOrderByAggregateInput } from "../inputs/PokemonRegionMaxOrderByAggregateInput";
import { PokemonRegionMinOrderByAggregateInput } from "../inputs/PokemonRegionMinOrderByAggregateInput";
import { PokemonRegionSumOrderByAggregateInput } from "../inputs/PokemonRegionSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonRegionOrderByWithAggregationInput", {
  isAbstract: true
})
export class PokemonRegionOrderByWithAggregationInput {
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
  pokemonNumber?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  region?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  typeSingle1?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  typeSingle2?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonRegionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonRegionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonRegionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonRegionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonRegionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonRegionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonRegionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonRegionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonRegionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonRegionSumOrderByAggregateInput | undefined;
}

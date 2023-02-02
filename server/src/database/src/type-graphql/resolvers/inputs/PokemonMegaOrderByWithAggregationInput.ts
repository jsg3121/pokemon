import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMegaAvgOrderByAggregateInput } from "../inputs/PokemonMegaAvgOrderByAggregateInput";
import { PokemonMegaCountOrderByAggregateInput } from "../inputs/PokemonMegaCountOrderByAggregateInput";
import { PokemonMegaMaxOrderByAggregateInput } from "../inputs/PokemonMegaMaxOrderByAggregateInput";
import { PokemonMegaMinOrderByAggregateInput } from "../inputs/PokemonMegaMinOrderByAggregateInput";
import { PokemonMegaSumOrderByAggregateInput } from "../inputs/PokemonMegaSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonMegaOrderByWithAggregationInput", {
  isAbstract: true
})
export class PokemonMegaOrderByWithAggregationInput {
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
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  typeSingle1?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  typeSingle2?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonMegaCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonMegaCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMegaAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonMegaAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMegaMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonMegaMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMegaMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonMegaMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMegaSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonMegaSumOrderByAggregateInput | undefined;
}

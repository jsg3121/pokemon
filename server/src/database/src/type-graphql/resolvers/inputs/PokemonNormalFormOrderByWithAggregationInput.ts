import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonNormalFormAvgOrderByAggregateInput } from "../inputs/PokemonNormalFormAvgOrderByAggregateInput";
import { PokemonNormalFormCountOrderByAggregateInput } from "../inputs/PokemonNormalFormCountOrderByAggregateInput";
import { PokemonNormalFormMaxOrderByAggregateInput } from "../inputs/PokemonNormalFormMaxOrderByAggregateInput";
import { PokemonNormalFormMinOrderByAggregateInput } from "../inputs/PokemonNormalFormMinOrderByAggregateInput";
import { PokemonNormalFormSumOrderByAggregateInput } from "../inputs/PokemonNormalFormSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonNormalFormOrderByWithAggregationInput", {
  isAbstract: true
})
export class PokemonNormalFormOrderByWithAggregationInput {
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
  name?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  imagePath?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  statCode?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PokemonNormalFormCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PokemonNormalFormCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonNormalFormAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PokemonNormalFormAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonNormalFormMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PokemonNormalFormMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonNormalFormMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PokemonNormalFormMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonNormalFormSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PokemonNormalFormSumOrderByAggregateInput | undefined;
}

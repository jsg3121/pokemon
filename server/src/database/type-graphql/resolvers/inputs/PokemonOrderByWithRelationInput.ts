import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMegaOrderByRelationAggregateInput } from "../inputs/PokemonMegaOrderByRelationAggregateInput";
import { PokemonRegionOrderByRelationAggregateInput } from "../inputs/PokemonRegionOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PokemonOrderByWithRelationInput", {
  isAbstract: true
})
export class PokemonOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => PokemonRegionOrderByRelationAggregateInput, {
    nullable: true
  })
  PokemonRegion?: PokemonRegionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMegaOrderByRelationAggregateInput, {
    nullable: true
  })
  PokemonMega?: PokemonMegaOrderByRelationAggregateInput | undefined;
}

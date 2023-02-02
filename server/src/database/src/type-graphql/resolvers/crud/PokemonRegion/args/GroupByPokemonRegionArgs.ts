import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonRegionOrderByWithAggregationInput } from "../../../inputs/PokemonRegionOrderByWithAggregationInput";
import { PokemonRegionScalarWhereWithAggregatesInput } from "../../../inputs/PokemonRegionScalarWhereWithAggregatesInput";
import { PokemonRegionWhereInput } from "../../../inputs/PokemonRegionWhereInput";
import { PokemonRegionScalarFieldEnum } from "../../../../enums/PokemonRegionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonRegionArgs {
  @TypeGraphQL.Field(_type => PokemonRegionWhereInput, {
    nullable: true
  })
  where?: PokemonRegionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonRegionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonRegionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonRegionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "pokemonId" | "pokemonNumber" | "region" | "type" | "typeSingle1" | "typeSingle2">;

  @TypeGraphQL.Field(_type => PokemonRegionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonRegionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

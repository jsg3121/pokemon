import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonNormalFormOrderByWithAggregationInput } from "../../../inputs/PokemonNormalFormOrderByWithAggregationInput";
import { PokemonNormalFormScalarWhereWithAggregatesInput } from "../../../inputs/PokemonNormalFormScalarWhereWithAggregatesInput";
import { PokemonNormalFormWhereInput } from "../../../inputs/PokemonNormalFormWhereInput";
import { PokemonNormalFormScalarFieldEnum } from "../../../../enums/PokemonNormalFormScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonNormalFormArgs {
  @TypeGraphQL.Field(_type => PokemonNormalFormWhereInput, {
    nullable: true
  })
  where?: PokemonNormalFormWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonNormalFormOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonNormalFormOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonNormalFormScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "pokemonId" | "type" | "typeSingle1" | "typeSingle2">;

  @TypeGraphQL.Field(_type => PokemonNormalFormScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonNormalFormScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

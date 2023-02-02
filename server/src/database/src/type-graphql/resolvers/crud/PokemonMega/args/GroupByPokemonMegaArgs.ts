import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMegaOrderByWithAggregationInput } from "../../../inputs/PokemonMegaOrderByWithAggregationInput";
import { PokemonMegaScalarWhereWithAggregatesInput } from "../../../inputs/PokemonMegaScalarWhereWithAggregatesInput";
import { PokemonMegaWhereInput } from "../../../inputs/PokemonMegaWhereInput";
import { PokemonMegaScalarFieldEnum } from "../../../../enums/PokemonMegaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonMegaArgs {
  @TypeGraphQL.Field(_type => PokemonMegaWhereInput, {
    nullable: true
  })
  where?: PokemonMegaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonMegaOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonMegaOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMegaScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "pokemonId" | "pokemonNumber" | "type" | "typeSingle1" | "typeSingle2">;

  @TypeGraphQL.Field(_type => PokemonMegaScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonMegaScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

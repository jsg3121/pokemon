import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonOrderByWithAggregationInput } from "../../../inputs/PokemonOrderByWithAggregationInput";
import { PokemonScalarWhereWithAggregatesInput } from "../../../inputs/PokemonScalarWhereWithAggregatesInput";
import { PokemonWhereInput } from "../../../inputs/PokemonWhereInput";
import { PokemonScalarFieldEnum } from "../../../../enums/PokemonScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPokemonArgs {
  @TypeGraphQL.Field(_type => PokemonWhereInput, {
    nullable: true
  })
  where?: PokemonWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PokemonOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "number" | "name" | "type" | "isRegion" | "isMega" | "typeSingle1" | "typeSingle2" | "isEvolution" | "evolutionId" | "generation">;

  @TypeGraphQL.Field(_type => PokemonScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PokemonScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

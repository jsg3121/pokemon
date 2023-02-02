import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonRegionOrderByWithRelationInput } from "../../../inputs/PokemonRegionOrderByWithRelationInput";
import { PokemonRegionWhereInput } from "../../../inputs/PokemonRegionWhereInput";
import { PokemonRegionWhereUniqueInput } from "../../../inputs/PokemonRegionWhereUniqueInput";
import { PokemonRegionScalarFieldEnum } from "../../../../enums/PokemonRegionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyPokemonRegionArgs {
  @TypeGraphQL.Field(_type => PokemonRegionWhereInput, {
    nullable: true
  })
  where?: PokemonRegionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonRegionOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonRegionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonRegionWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonRegionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PokemonRegionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "pokemonId" | "pokemonNumber" | "region" | "type" | "typeSingle1" | "typeSingle2"> | undefined;
}

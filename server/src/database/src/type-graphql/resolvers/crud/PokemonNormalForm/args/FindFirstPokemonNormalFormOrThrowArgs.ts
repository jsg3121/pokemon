import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonNormalFormOrderByWithRelationInput } from "../../../inputs/PokemonNormalFormOrderByWithRelationInput";
import { PokemonNormalFormWhereInput } from "../../../inputs/PokemonNormalFormWhereInput";
import { PokemonNormalFormWhereUniqueInput } from "../../../inputs/PokemonNormalFormWhereUniqueInput";
import { PokemonNormalFormScalarFieldEnum } from "../../../../enums/PokemonNormalFormScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPokemonNormalFormOrThrowArgs {
  @TypeGraphQL.Field(_type => PokemonNormalFormWhereInput, {
    nullable: true
  })
  where?: PokemonNormalFormWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonNormalFormOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonNormalFormOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonNormalFormWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonNormalFormWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PokemonNormalFormScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "pokemonId" | "name" | "type" | "typeSingle1" | "typeSingle2" | "imagePath" | "statCode" | "abilityId"> | undefined;
}

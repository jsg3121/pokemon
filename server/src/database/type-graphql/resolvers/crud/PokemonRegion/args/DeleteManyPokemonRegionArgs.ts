import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonRegionWhereInput } from "../../../inputs/PokemonRegionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPokemonRegionArgs {
  @TypeGraphQL.Field(_type => PokemonRegionWhereInput, {
    nullable: true
  })
  where?: PokemonRegionWhereInput | undefined;
}

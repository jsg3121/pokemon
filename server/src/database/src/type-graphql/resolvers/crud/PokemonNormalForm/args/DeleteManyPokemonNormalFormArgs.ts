import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonNormalFormWhereInput } from "../../../inputs/PokemonNormalFormWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPokemonNormalFormArgs {
  @TypeGraphQL.Field(_type => PokemonNormalFormWhereInput, {
    nullable: true
  })
  where?: PokemonNormalFormWhereInput | undefined;
}

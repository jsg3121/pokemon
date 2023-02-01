import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMegaWhereInput } from "../../../inputs/PokemonMegaWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPokemonMegaArgs {
  @TypeGraphQL.Field(_type => PokemonMegaWhereInput, {
    nullable: true
  })
  where?: PokemonMegaWhereInput | undefined;
}

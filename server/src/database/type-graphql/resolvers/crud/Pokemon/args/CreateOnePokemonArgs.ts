import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonCreateInput } from "../../../inputs/PokemonCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonArgs {
  @TypeGraphQL.Field(_type => PokemonCreateInput, {
    nullable: false
  })
  data!: PokemonCreateInput;
}

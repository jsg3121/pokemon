import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMegaCreateInput } from "../../../inputs/PokemonMegaCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonMegaArgs {
  @TypeGraphQL.Field(_type => PokemonMegaCreateInput, {
    nullable: false
  })
  data!: PokemonMegaCreateInput;
}

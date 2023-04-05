import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonNormalFormCreateInput } from "../../../inputs/PokemonNormalFormCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonNormalFormArgs {
  @TypeGraphQL.Field(_type => PokemonNormalFormCreateInput, {
    nullable: false
  })
  data!: PokemonNormalFormCreateInput;
}

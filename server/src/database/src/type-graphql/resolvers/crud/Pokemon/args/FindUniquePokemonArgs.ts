import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonWhereUniqueInput } from "../../../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePokemonArgs {
  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonWhereUniqueInput;
}

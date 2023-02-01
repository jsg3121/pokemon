import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMegaWhereUniqueInput } from "../../../inputs/PokemonMegaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePokemonMegaArgs {
  @TypeGraphQL.Field(_type => PokemonMegaWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMegaWhereUniqueInput;
}

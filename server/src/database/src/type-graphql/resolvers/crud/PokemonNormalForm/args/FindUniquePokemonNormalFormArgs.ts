import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonNormalFormWhereUniqueInput } from "../../../inputs/PokemonNormalFormWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePokemonNormalFormArgs {
  @TypeGraphQL.Field(_type => PokemonNormalFormWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonNormalFormWhereUniqueInput;
}

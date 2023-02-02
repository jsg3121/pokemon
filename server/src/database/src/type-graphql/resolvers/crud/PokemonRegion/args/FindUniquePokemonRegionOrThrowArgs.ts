import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonRegionWhereUniqueInput } from "../../../inputs/PokemonRegionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePokemonRegionOrThrowArgs {
  @TypeGraphQL.Field(_type => PokemonRegionWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonRegionWhereUniqueInput;
}

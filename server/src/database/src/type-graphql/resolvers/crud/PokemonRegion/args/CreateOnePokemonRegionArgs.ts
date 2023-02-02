import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonRegionCreateInput } from "../../../inputs/PokemonRegionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePokemonRegionArgs {
  @TypeGraphQL.Field(_type => PokemonRegionCreateInput, {
    nullable: false
  })
  data!: PokemonRegionCreateInput;
}

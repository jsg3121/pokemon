import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonCreateManyInput } from "../../../inputs/PokemonCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPokemonArgs {
  @TypeGraphQL.Field(_type => [PokemonCreateManyInput], {
    nullable: false
  })
  data!: PokemonCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

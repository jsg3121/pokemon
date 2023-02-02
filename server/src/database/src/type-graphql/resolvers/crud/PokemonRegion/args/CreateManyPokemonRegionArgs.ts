import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonRegionCreateManyInput } from "../../../inputs/PokemonRegionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPokemonRegionArgs {
  @TypeGraphQL.Field(_type => [PokemonRegionCreateManyInput], {
    nullable: false
  })
  data!: PokemonRegionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

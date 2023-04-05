import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonNormalFormCreateManyInput } from "../../../inputs/PokemonNormalFormCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPokemonNormalFormArgs {
  @TypeGraphQL.Field(_type => [PokemonNormalFormCreateManyInput], {
    nullable: false
  })
  data!: PokemonNormalFormCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

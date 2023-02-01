import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMegaCreateManyInput } from "../../../inputs/PokemonMegaCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPokemonMegaArgs {
  @TypeGraphQL.Field(_type => [PokemonMegaCreateManyInput], {
    nullable: false
  })
  data!: PokemonMegaCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonUpdateInput } from "../../../inputs/PokemonUpdateInput";
import { PokemonWhereUniqueInput } from "../../../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonArgs {
  @TypeGraphQL.Field(_type => PokemonUpdateInput, {
    nullable: false
  })
  data!: PokemonUpdateInput;

  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonWhereUniqueInput;
}

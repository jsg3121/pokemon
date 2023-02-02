import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonCreateInput } from "../../../inputs/PokemonCreateInput";
import { PokemonUpdateInput } from "../../../inputs/PokemonUpdateInput";
import { PokemonWhereUniqueInput } from "../../../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonArgs {
  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonCreateInput, {
    nullable: false
  })
  create!: PokemonCreateInput;

  @TypeGraphQL.Field(_type => PokemonUpdateInput, {
    nullable: false
  })
  update!: PokemonUpdateInput;
}

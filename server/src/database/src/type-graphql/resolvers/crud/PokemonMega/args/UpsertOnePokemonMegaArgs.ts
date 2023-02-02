import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMegaCreateInput } from "../../../inputs/PokemonMegaCreateInput";
import { PokemonMegaUpdateInput } from "../../../inputs/PokemonMegaUpdateInput";
import { PokemonMegaWhereUniqueInput } from "../../../inputs/PokemonMegaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonMegaArgs {
  @TypeGraphQL.Field(_type => PokemonMegaWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMegaWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonMegaCreateInput, {
    nullable: false
  })
  create!: PokemonMegaCreateInput;

  @TypeGraphQL.Field(_type => PokemonMegaUpdateInput, {
    nullable: false
  })
  update!: PokemonMegaUpdateInput;
}

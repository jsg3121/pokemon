import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMegaUpdateInput } from "../../../inputs/PokemonMegaUpdateInput";
import { PokemonMegaWhereUniqueInput } from "../../../inputs/PokemonMegaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonMegaArgs {
  @TypeGraphQL.Field(_type => PokemonMegaUpdateInput, {
    nullable: false
  })
  data!: PokemonMegaUpdateInput;

  @TypeGraphQL.Field(_type => PokemonMegaWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMegaWhereUniqueInput;
}

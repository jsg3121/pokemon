import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonNormalFormUpdateInput } from "../../../inputs/PokemonNormalFormUpdateInput";
import { PokemonNormalFormWhereUniqueInput } from "../../../inputs/PokemonNormalFormWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonNormalFormArgs {
  @TypeGraphQL.Field(_type => PokemonNormalFormUpdateInput, {
    nullable: false
  })
  data!: PokemonNormalFormUpdateInput;

  @TypeGraphQL.Field(_type => PokemonNormalFormWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonNormalFormWhereUniqueInput;
}

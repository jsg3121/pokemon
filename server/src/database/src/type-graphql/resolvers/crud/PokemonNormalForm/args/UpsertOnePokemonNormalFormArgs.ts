import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonNormalFormCreateInput } from "../../../inputs/PokemonNormalFormCreateInput";
import { PokemonNormalFormUpdateInput } from "../../../inputs/PokemonNormalFormUpdateInput";
import { PokemonNormalFormWhereUniqueInput } from "../../../inputs/PokemonNormalFormWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonNormalFormArgs {
  @TypeGraphQL.Field(_type => PokemonNormalFormWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonNormalFormWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonNormalFormCreateInput, {
    nullable: false
  })
  create!: PokemonNormalFormCreateInput;

  @TypeGraphQL.Field(_type => PokemonNormalFormUpdateInput, {
    nullable: false
  })
  update!: PokemonNormalFormUpdateInput;
}

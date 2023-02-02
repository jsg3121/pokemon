import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonRegionCreateInput } from "../../../inputs/PokemonRegionCreateInput";
import { PokemonRegionUpdateInput } from "../../../inputs/PokemonRegionUpdateInput";
import { PokemonRegionWhereUniqueInput } from "../../../inputs/PokemonRegionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePokemonRegionArgs {
  @TypeGraphQL.Field(_type => PokemonRegionWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonRegionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonRegionCreateInput, {
    nullable: false
  })
  create!: PokemonRegionCreateInput;

  @TypeGraphQL.Field(_type => PokemonRegionUpdateInput, {
    nullable: false
  })
  update!: PokemonRegionUpdateInput;
}

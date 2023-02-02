import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonRegionUpdateInput } from "../../../inputs/PokemonRegionUpdateInput";
import { PokemonRegionWhereUniqueInput } from "../../../inputs/PokemonRegionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePokemonRegionArgs {
  @TypeGraphQL.Field(_type => PokemonRegionUpdateInput, {
    nullable: false
  })
  data!: PokemonRegionUpdateInput;

  @TypeGraphQL.Field(_type => PokemonRegionWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonRegionWhereUniqueInput;
}

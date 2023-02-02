import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonRegionUpdateManyMutationInput } from "../../../inputs/PokemonRegionUpdateManyMutationInput";
import { PokemonRegionWhereInput } from "../../../inputs/PokemonRegionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonRegionArgs {
  @TypeGraphQL.Field(_type => PokemonRegionUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonRegionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonRegionWhereInput, {
    nullable: true
  })
  where?: PokemonRegionWhereInput | undefined;
}

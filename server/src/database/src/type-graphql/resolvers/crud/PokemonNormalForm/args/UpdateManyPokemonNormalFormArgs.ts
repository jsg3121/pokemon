import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonNormalFormUpdateManyMutationInput } from "../../../inputs/PokemonNormalFormUpdateManyMutationInput";
import { PokemonNormalFormWhereInput } from "../../../inputs/PokemonNormalFormWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonNormalFormArgs {
  @TypeGraphQL.Field(_type => PokemonNormalFormUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonNormalFormUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonNormalFormWhereInput, {
    nullable: true
  })
  where?: PokemonNormalFormWhereInput | undefined;
}

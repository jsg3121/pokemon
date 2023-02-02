import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMegaUpdateManyMutationInput } from "../../../inputs/PokemonMegaUpdateManyMutationInput";
import { PokemonMegaWhereInput } from "../../../inputs/PokemonMegaWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonMegaArgs {
  @TypeGraphQL.Field(_type => PokemonMegaUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonMegaUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonMegaWhereInput, {
    nullable: true
  })
  where?: PokemonMegaWhereInput | undefined;
}

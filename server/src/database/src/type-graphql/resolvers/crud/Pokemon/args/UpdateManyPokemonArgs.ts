import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonUpdateManyMutationInput } from "../../../inputs/PokemonUpdateManyMutationInput";
import { PokemonWhereInput } from "../../../inputs/PokemonWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPokemonArgs {
  @TypeGraphQL.Field(_type => PokemonUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PokemonWhereInput, {
    nullable: true
  })
  where?: PokemonWhereInput | undefined;
}

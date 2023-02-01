import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonRegionScalarWhereInput } from "../inputs/PokemonRegionScalarWhereInput";
import { PokemonRegionUpdateManyMutationInput } from "../inputs/PokemonRegionUpdateManyMutationInput";

@TypeGraphQL.InputType("PokemonRegionUpdateManyWithWhereWithoutPokemonInput", {
  isAbstract: true
})
export class PokemonRegionUpdateManyWithWhereWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonRegionScalarWhereInput, {
    nullable: false
  })
  where!: PokemonRegionScalarWhereInput;

  @TypeGraphQL.Field(_type => PokemonRegionUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonRegionUpdateManyMutationInput;
}

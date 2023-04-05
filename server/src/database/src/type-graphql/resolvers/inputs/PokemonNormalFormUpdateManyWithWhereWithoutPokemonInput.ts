import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonNormalFormScalarWhereInput } from "../inputs/PokemonNormalFormScalarWhereInput";
import { PokemonNormalFormUpdateManyMutationInput } from "../inputs/PokemonNormalFormUpdateManyMutationInput";

@TypeGraphQL.InputType("PokemonNormalFormUpdateManyWithWhereWithoutPokemonInput", {
  isAbstract: true
})
export class PokemonNormalFormUpdateManyWithWhereWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonNormalFormScalarWhereInput, {
    nullable: false
  })
  where!: PokemonNormalFormScalarWhereInput;

  @TypeGraphQL.Field(_type => PokemonNormalFormUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonNormalFormUpdateManyMutationInput;
}

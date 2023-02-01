import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMegaScalarWhereInput } from "../inputs/PokemonMegaScalarWhereInput";
import { PokemonMegaUpdateManyMutationInput } from "../inputs/PokemonMegaUpdateManyMutationInput";

@TypeGraphQL.InputType("PokemonMegaUpdateManyWithWhereWithoutPokemonInput", {
  isAbstract: true
})
export class PokemonMegaUpdateManyWithWhereWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonMegaScalarWhereInput, {
    nullable: false
  })
  where!: PokemonMegaScalarWhereInput;

  @TypeGraphQL.Field(_type => PokemonMegaUpdateManyMutationInput, {
    nullable: false
  })
  data!: PokemonMegaUpdateManyMutationInput;
}

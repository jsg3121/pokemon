import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonNormalFormUpdateWithoutPokemonInput } from "../inputs/PokemonNormalFormUpdateWithoutPokemonInput";
import { PokemonNormalFormWhereUniqueInput } from "../inputs/PokemonNormalFormWhereUniqueInput";

@TypeGraphQL.InputType("PokemonNormalFormUpdateWithWhereUniqueWithoutPokemonInput", {
  isAbstract: true
})
export class PokemonNormalFormUpdateWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonNormalFormWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonNormalFormWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonNormalFormUpdateWithoutPokemonInput, {
    nullable: false
  })
  data!: PokemonNormalFormUpdateWithoutPokemonInput;
}

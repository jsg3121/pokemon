import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMegaUpdateWithoutPokemonInput } from "../inputs/PokemonMegaUpdateWithoutPokemonInput";
import { PokemonMegaWhereUniqueInput } from "../inputs/PokemonMegaWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMegaUpdateWithWhereUniqueWithoutPokemonInput", {
  isAbstract: true
})
export class PokemonMegaUpdateWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonMegaWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMegaWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonMegaUpdateWithoutPokemonInput, {
    nullable: false
  })
  data!: PokemonMegaUpdateWithoutPokemonInput;
}

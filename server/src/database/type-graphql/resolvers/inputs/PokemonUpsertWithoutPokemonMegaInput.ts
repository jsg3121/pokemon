import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateWithoutPokemonMegaInput } from "../inputs/PokemonCreateWithoutPokemonMegaInput";
import { PokemonUpdateWithoutPokemonMegaInput } from "../inputs/PokemonUpdateWithoutPokemonMegaInput";

@TypeGraphQL.InputType("PokemonUpsertWithoutPokemonMegaInput", {
  isAbstract: true
})
export class PokemonUpsertWithoutPokemonMegaInput {
  @TypeGraphQL.Field(_type => PokemonUpdateWithoutPokemonMegaInput, {
    nullable: false
  })
  update!: PokemonUpdateWithoutPokemonMegaInput;

  @TypeGraphQL.Field(_type => PokemonCreateWithoutPokemonMegaInput, {
    nullable: false
  })
  create!: PokemonCreateWithoutPokemonMegaInput;
}

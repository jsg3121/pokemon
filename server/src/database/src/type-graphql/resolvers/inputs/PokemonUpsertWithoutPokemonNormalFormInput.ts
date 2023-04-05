import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateWithoutPokemonNormalFormInput } from "../inputs/PokemonCreateWithoutPokemonNormalFormInput";
import { PokemonUpdateWithoutPokemonNormalFormInput } from "../inputs/PokemonUpdateWithoutPokemonNormalFormInput";

@TypeGraphQL.InputType("PokemonUpsertWithoutPokemonNormalFormInput", {
  isAbstract: true
})
export class PokemonUpsertWithoutPokemonNormalFormInput {
  @TypeGraphQL.Field(_type => PokemonUpdateWithoutPokemonNormalFormInput, {
    nullable: false
  })
  update!: PokemonUpdateWithoutPokemonNormalFormInput;

  @TypeGraphQL.Field(_type => PokemonCreateWithoutPokemonNormalFormInput, {
    nullable: false
  })
  create!: PokemonCreateWithoutPokemonNormalFormInput;
}

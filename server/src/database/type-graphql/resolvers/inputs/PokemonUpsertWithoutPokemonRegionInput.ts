import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateWithoutPokemonRegionInput } from "../inputs/PokemonCreateWithoutPokemonRegionInput";
import { PokemonUpdateWithoutPokemonRegionInput } from "../inputs/PokemonUpdateWithoutPokemonRegionInput";

@TypeGraphQL.InputType("PokemonUpsertWithoutPokemonRegionInput", {
  isAbstract: true
})
export class PokemonUpsertWithoutPokemonRegionInput {
  @TypeGraphQL.Field(_type => PokemonUpdateWithoutPokemonRegionInput, {
    nullable: false
  })
  update!: PokemonUpdateWithoutPokemonRegionInput;

  @TypeGraphQL.Field(_type => PokemonCreateWithoutPokemonRegionInput, {
    nullable: false
  })
  create!: PokemonCreateWithoutPokemonRegionInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonRegionCreateWithoutPokemonInput } from "../inputs/PokemonRegionCreateWithoutPokemonInput";
import { PokemonRegionUpdateWithoutPokemonInput } from "../inputs/PokemonRegionUpdateWithoutPokemonInput";
import { PokemonRegionWhereUniqueInput } from "../inputs/PokemonRegionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonRegionUpsertWithWhereUniqueWithoutPokemonInput", {
  isAbstract: true
})
export class PokemonRegionUpsertWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonRegionWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonRegionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonRegionUpdateWithoutPokemonInput, {
    nullable: false
  })
  update!: PokemonRegionUpdateWithoutPokemonInput;

  @TypeGraphQL.Field(_type => PokemonRegionCreateWithoutPokemonInput, {
    nullable: false
  })
  create!: PokemonRegionCreateWithoutPokemonInput;
}

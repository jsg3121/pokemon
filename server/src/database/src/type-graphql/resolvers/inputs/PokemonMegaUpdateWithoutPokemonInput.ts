import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MegaStatsUpdateManyWithoutMegaPokemonNestedInput } from "../inputs/MegaStatsUpdateManyWithoutMegaPokemonNestedInput";
import { PokemonAbilityListUpdateManyWithoutPokemonMegaNestedInput } from "../inputs/PokemonAbilityListUpdateManyWithoutPokemonMegaNestedInput";

@TypeGraphQL.InputType("PokemonMegaUpdateWithoutPokemonInput", {
  isAbstract: true
})
export class PokemonMegaUpdateWithoutPokemonInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  pokemonNumber?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  type?: string[] | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  typeSingle1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  typeSingle2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  statCode?: string | undefined;

  @TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
    nullable: true
  })
  abilityId?: number[] | undefined;

  @TypeGraphQL.Field(_type => MegaStatsUpdateManyWithoutMegaPokemonNestedInput, {
    nullable: true
  })
  MegaStats?: MegaStatsUpdateManyWithoutMegaPokemonNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilityListUpdateManyWithoutPokemonMegaNestedInput, {
    nullable: true
  })
  PokemonAbilityList?: PokemonAbilityListUpdateManyWithoutPokemonMegaNestedInput | undefined;
}

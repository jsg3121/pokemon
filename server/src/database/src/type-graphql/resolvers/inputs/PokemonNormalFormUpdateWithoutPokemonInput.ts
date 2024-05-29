import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormStatsUpdateManyWithoutNormalFormPokemonNestedInput } from "../inputs/FormStatsUpdateManyWithoutNormalFormPokemonNestedInput";
import { PokemonNormalFormAbilityListUpdateManyWithoutPokemonNormalFormNestedInput } from "../inputs/PokemonNormalFormAbilityListUpdateManyWithoutPokemonNormalFormNestedInput";

@TypeGraphQL.InputType("PokemonNormalFormUpdateWithoutPokemonInput", {
  isAbstract: true
})
export class PokemonNormalFormUpdateWithoutPokemonInput {
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
  imagePath?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  statCode?: string | undefined;

  @TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
    nullable: true
  })
  abilityId?: number[] | undefined;

  @TypeGraphQL.Field(_type => FormStatsUpdateManyWithoutNormalFormPokemonNestedInput, {
    nullable: true
  })
  FormStats?: FormStatsUpdateManyWithoutNormalFormPokemonNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonNormalFormAbilityListUpdateManyWithoutPokemonNormalFormNestedInput, {
    nullable: true
  })
  PokemonNormalFormAbilityList?: PokemonNormalFormAbilityListUpdateManyWithoutPokemonNormalFormNestedInput | undefined;
}

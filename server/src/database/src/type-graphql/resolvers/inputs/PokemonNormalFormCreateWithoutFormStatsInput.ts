import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateNestedOneWithoutPokemonNormalFormInput } from "../inputs/PokemonCreateNestedOneWithoutPokemonNormalFormInput";
import { PokemonNormalFormAbilityListCreateNestedManyWithoutPokemonNormalFormInput } from "../inputs/PokemonNormalFormAbilityListCreateNestedManyWithoutPokemonNormalFormInput";

@TypeGraphQL.InputType("PokemonNormalFormCreateWithoutFormStatsInput", {
  isAbstract: true
})
export class PokemonNormalFormCreateWithoutFormStatsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  type?: string[] | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  typeSingle1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  typeSingle2?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  imagePath!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  statCode!: string;

  @TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
    nullable: true
  })
  abilityId?: number[] | undefined;

  @TypeGraphQL.Field(_type => PokemonCreateNestedOneWithoutPokemonNormalFormInput, {
    nullable: false
  })
  pokemon!: PokemonCreateNestedOneWithoutPokemonNormalFormInput;

  @TypeGraphQL.Field(_type => PokemonNormalFormAbilityListCreateNestedManyWithoutPokemonNormalFormInput, {
    nullable: true
  })
  PokemonNormalFormAbilityList?: PokemonNormalFormAbilityListCreateNestedManyWithoutPokemonNormalFormInput | undefined;
}

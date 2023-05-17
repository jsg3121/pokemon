import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NormalStatsCreateNestedOneWithoutPokemonInput } from "../inputs/NormalStatsCreateNestedOneWithoutPokemonInput";
import { PokemonMegaCreateNestedManyWithoutPokemonInput } from "../inputs/PokemonMegaCreateNestedManyWithoutPokemonInput";
import { PokemonNormalFormCreateNestedManyWithoutPokemonInput } from "../inputs/PokemonNormalFormCreateNestedManyWithoutPokemonInput";

@TypeGraphQL.InputType("PokemonCreateWithoutPokemonRegionInput", {
  isAbstract: true
})
export class PokemonCreateWithoutPokemonRegionInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  number!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  type?: string[] | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isRegion?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isMega?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  typeSingle1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  typeSingle2?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isEvolution?: boolean | undefined;

  @TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
    nullable: true
  })
  evolutionId?: number[] | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  generation!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isForm?: boolean | undefined;

  @TypeGraphQL.Field(_type => PokemonMegaCreateNestedManyWithoutPokemonInput, {
    nullable: true
  })
  PokemonMega?: PokemonMegaCreateNestedManyWithoutPokemonInput | undefined;

  @TypeGraphQL.Field(_type => PokemonNormalFormCreateNestedManyWithoutPokemonInput, {
    nullable: true
  })
  PokemonNormalForm?: PokemonNormalFormCreateNestedManyWithoutPokemonInput | undefined;

  @TypeGraphQL.Field(_type => NormalStatsCreateNestedOneWithoutPokemonInput, {
    nullable: true
  })
  NormalStats?: NormalStatsCreateNestedOneWithoutPokemonInput | undefined;
}

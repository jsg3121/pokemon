import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NormalStatsCreateNestedManyWithoutPokemonInput } from "../inputs/NormalStatsCreateNestedManyWithoutPokemonInput";
import { PokemonMegaCreateNestedManyWithoutPokemonInput } from "../inputs/PokemonMegaCreateNestedManyWithoutPokemonInput";
import { PokemonRegionCreateNestedManyWithoutPokemonInput } from "../inputs/PokemonRegionCreateNestedManyWithoutPokemonInput";

@TypeGraphQL.InputType("PokemonCreateWithoutPokemonNormalFormInput", {
  isAbstract: true
})
export class PokemonCreateWithoutPokemonNormalFormInput {
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

  @TypeGraphQL.Field(_type => PokemonRegionCreateNestedManyWithoutPokemonInput, {
    nullable: true
  })
  PokemonRegion?: PokemonRegionCreateNestedManyWithoutPokemonInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMegaCreateNestedManyWithoutPokemonInput, {
    nullable: true
  })
  PokemonMega?: PokemonMegaCreateNestedManyWithoutPokemonInput | undefined;

  @TypeGraphQL.Field(_type => NormalStatsCreateNestedManyWithoutPokemonInput, {
    nullable: true
  })
  NormalStats?: NormalStatsCreateNestedManyWithoutPokemonInput | undefined;
}

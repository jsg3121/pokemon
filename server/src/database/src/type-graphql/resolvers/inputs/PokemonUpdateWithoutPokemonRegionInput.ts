import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMegaUpdateManyWithoutPokemonNestedInput } from "../inputs/PokemonMegaUpdateManyWithoutPokemonNestedInput";

@TypeGraphQL.InputType("PokemonUpdateWithoutPokemonRegionInput", {
  isAbstract: true
})
export class PokemonUpdateWithoutPokemonRegionInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  number?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

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
    nullable: true
  })
  typeSingle1?: string | undefined;

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
    nullable: true
  })
  generation?: number | undefined;

  @TypeGraphQL.Field(_type => PokemonMegaUpdateManyWithoutPokemonNestedInput, {
    nullable: true
  })
  PokemonMega?: PokemonMegaUpdateManyWithoutPokemonNestedInput | undefined;
}

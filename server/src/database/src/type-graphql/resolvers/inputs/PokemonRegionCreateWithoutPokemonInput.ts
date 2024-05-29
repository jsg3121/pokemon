import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonRegionFormAbilityListCreateNestedManyWithoutPokemonRegionInput } from "../inputs/PokemonRegionFormAbilityListCreateNestedManyWithoutPokemonRegionInput";
import { RegionStatsCreateNestedManyWithoutRegionPokemonInput } from "../inputs/RegionStatsCreateNestedManyWithoutRegionPokemonInput";

@TypeGraphQL.InputType("PokemonRegionCreateWithoutPokemonInput", {
  isAbstract: true
})
export class PokemonRegionCreateWithoutPokemonInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokemonNumber!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  region!: string;

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
  statCode!: string;

  @TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
    nullable: true
  })
  abilityId?: number[] | undefined;

  @TypeGraphQL.Field(_type => RegionStatsCreateNestedManyWithoutRegionPokemonInput, {
    nullable: true
  })
  RegionStats?: RegionStatsCreateNestedManyWithoutRegionPokemonInput | undefined;

  @TypeGraphQL.Field(_type => PokemonRegionFormAbilityListCreateNestedManyWithoutPokemonRegionInput, {
    nullable: true
  })
  PokemonRegionFormAbilityList?: PokemonRegionFormAbilityListCreateNestedManyWithoutPokemonRegionInput | undefined;
}

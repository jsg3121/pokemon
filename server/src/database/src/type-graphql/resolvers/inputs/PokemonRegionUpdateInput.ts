import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonRegionFormAbilityListUpdateManyWithoutPokemonRegionNestedInput } from "../inputs/PokemonRegionFormAbilityListUpdateManyWithoutPokemonRegionNestedInput";
import { PokemonUpdateOneRequiredWithoutPokemonRegionNestedInput } from "../inputs/PokemonUpdateOneRequiredWithoutPokemonRegionNestedInput";
import { RegionStatsUpdateManyWithoutRegionPokemonNestedInput } from "../inputs/RegionStatsUpdateManyWithoutRegionPokemonNestedInput";

@TypeGraphQL.InputType("PokemonRegionUpdateInput", {
  isAbstract: true
})
export class PokemonRegionUpdateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  pokemonNumber?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  region?: string | undefined;

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

  @TypeGraphQL.Field(_type => PokemonUpdateOneRequiredWithoutPokemonRegionNestedInput, {
    nullable: true
  })
  pokemon?: PokemonUpdateOneRequiredWithoutPokemonRegionNestedInput | undefined;

  @TypeGraphQL.Field(_type => RegionStatsUpdateManyWithoutRegionPokemonNestedInput, {
    nullable: true
  })
  RegionStats?: RegionStatsUpdateManyWithoutRegionPokemonNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonRegionFormAbilityListUpdateManyWithoutPokemonRegionNestedInput, {
    nullable: true
  })
  PokemonRegionFormAbilityList?: PokemonRegionFormAbilityListUpdateManyWithoutPokemonRegionNestedInput | undefined;
}

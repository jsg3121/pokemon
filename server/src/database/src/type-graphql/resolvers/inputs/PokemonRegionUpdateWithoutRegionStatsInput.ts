import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAbilityListUpdateManyWithoutPokemonRegionNestedInput } from "../inputs/PokemonAbilityListUpdateManyWithoutPokemonRegionNestedInput";
import { PokemonUpdateOneRequiredWithoutPokemonRegionNestedInput } from "../inputs/PokemonUpdateOneRequiredWithoutPokemonRegionNestedInput";

@TypeGraphQL.InputType("PokemonRegionUpdateWithoutRegionStatsInput", {
  isAbstract: true
})
export class PokemonRegionUpdateWithoutRegionStatsInput {
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

  @TypeGraphQL.Field(_type => PokemonAbilityListUpdateManyWithoutPokemonRegionNestedInput, {
    nullable: true
  })
  PokemonAbilityList?: PokemonAbilityListUpdateManyWithoutPokemonRegionNestedInput | undefined;
}

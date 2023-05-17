import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonRegionUpdateOneRequiredWithoutRegionStatsNestedInput } from "../inputs/PokemonRegionUpdateOneRequiredWithoutRegionStatsNestedInput";

@TypeGraphQL.InputType("RegionStatsUpdateInput", {
  isAbstract: true
})
export class RegionStatsUpdateInput {
  @TypeGraphQL.Field(_type => PokemonRegionUpdateOneRequiredWithoutRegionStatsNestedInput, {
    nullable: true
  })
  regionPokemon?: PokemonRegionUpdateOneRequiredWithoutRegionStatsNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  hp?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  attack?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  defense?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  specialAttack?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  specialDefense?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  speed?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  total?: number | undefined;
}

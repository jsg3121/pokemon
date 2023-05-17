import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionStatsUpdateWithoutRegionPokemonInput } from "../inputs/RegionStatsUpdateWithoutRegionPokemonInput";
import { RegionStatsWhereUniqueInput } from "../inputs/RegionStatsWhereUniqueInput";

@TypeGraphQL.InputType("RegionStatsUpdateWithWhereUniqueWithoutRegionPokemonInput", {
  isAbstract: true
})
export class RegionStatsUpdateWithWhereUniqueWithoutRegionPokemonInput {
  @TypeGraphQL.Field(_type => RegionStatsWhereUniqueInput, {
    nullable: false
  })
  where!: RegionStatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => RegionStatsUpdateWithoutRegionPokemonInput, {
    nullable: false
  })
  data!: RegionStatsUpdateWithoutRegionPokemonInput;
}

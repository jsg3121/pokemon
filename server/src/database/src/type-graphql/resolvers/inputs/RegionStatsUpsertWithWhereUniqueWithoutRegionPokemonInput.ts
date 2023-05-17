import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionStatsCreateWithoutRegionPokemonInput } from "../inputs/RegionStatsCreateWithoutRegionPokemonInput";
import { RegionStatsUpdateWithoutRegionPokemonInput } from "../inputs/RegionStatsUpdateWithoutRegionPokemonInput";
import { RegionStatsWhereUniqueInput } from "../inputs/RegionStatsWhereUniqueInput";

@TypeGraphQL.InputType("RegionStatsUpsertWithWhereUniqueWithoutRegionPokemonInput", {
  isAbstract: true
})
export class RegionStatsUpsertWithWhereUniqueWithoutRegionPokemonInput {
  @TypeGraphQL.Field(_type => RegionStatsWhereUniqueInput, {
    nullable: false
  })
  where!: RegionStatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => RegionStatsUpdateWithoutRegionPokemonInput, {
    nullable: false
  })
  update!: RegionStatsUpdateWithoutRegionPokemonInput;

  @TypeGraphQL.Field(_type => RegionStatsCreateWithoutRegionPokemonInput, {
    nullable: false
  })
  create!: RegionStatsCreateWithoutRegionPokemonInput;
}

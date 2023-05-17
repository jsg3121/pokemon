import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionStatsCreateWithoutRegionPokemonInput } from "../inputs/RegionStatsCreateWithoutRegionPokemonInput";
import { RegionStatsWhereUniqueInput } from "../inputs/RegionStatsWhereUniqueInput";

@TypeGraphQL.InputType("RegionStatsCreateOrConnectWithoutRegionPokemonInput", {
  isAbstract: true
})
export class RegionStatsCreateOrConnectWithoutRegionPokemonInput {
  @TypeGraphQL.Field(_type => RegionStatsWhereUniqueInput, {
    nullable: false
  })
  where!: RegionStatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => RegionStatsCreateWithoutRegionPokemonInput, {
    nullable: false
  })
  create!: RegionStatsCreateWithoutRegionPokemonInput;
}

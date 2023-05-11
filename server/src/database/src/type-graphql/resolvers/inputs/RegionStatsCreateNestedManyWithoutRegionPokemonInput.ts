import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionStatsCreateManyRegionPokemonInputEnvelope } from "../inputs/RegionStatsCreateManyRegionPokemonInputEnvelope";
import { RegionStatsCreateOrConnectWithoutRegionPokemonInput } from "../inputs/RegionStatsCreateOrConnectWithoutRegionPokemonInput";
import { RegionStatsCreateWithoutRegionPokemonInput } from "../inputs/RegionStatsCreateWithoutRegionPokemonInput";
import { RegionStatsWhereUniqueInput } from "../inputs/RegionStatsWhereUniqueInput";

@TypeGraphQL.InputType("RegionStatsCreateNestedManyWithoutRegionPokemonInput", {
  isAbstract: true
})
export class RegionStatsCreateNestedManyWithoutRegionPokemonInput {
  @TypeGraphQL.Field(_type => [RegionStatsCreateWithoutRegionPokemonInput], {
    nullable: true
  })
  create?: RegionStatsCreateWithoutRegionPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionStatsCreateOrConnectWithoutRegionPokemonInput], {
    nullable: true
  })
  connectOrCreate?: RegionStatsCreateOrConnectWithoutRegionPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => RegionStatsCreateManyRegionPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: RegionStatsCreateManyRegionPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [RegionStatsWhereUniqueInput], {
    nullable: true
  })
  connect?: RegionStatsWhereUniqueInput[] | undefined;
}

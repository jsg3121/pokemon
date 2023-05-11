import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionStatsCreateManyRegionPokemonInputEnvelope } from "../inputs/RegionStatsCreateManyRegionPokemonInputEnvelope";
import { RegionStatsCreateOrConnectWithoutRegionPokemonInput } from "../inputs/RegionStatsCreateOrConnectWithoutRegionPokemonInput";
import { RegionStatsCreateWithoutRegionPokemonInput } from "../inputs/RegionStatsCreateWithoutRegionPokemonInput";
import { RegionStatsScalarWhereInput } from "../inputs/RegionStatsScalarWhereInput";
import { RegionStatsUpdateManyWithWhereWithoutRegionPokemonInput } from "../inputs/RegionStatsUpdateManyWithWhereWithoutRegionPokemonInput";
import { RegionStatsUpdateWithWhereUniqueWithoutRegionPokemonInput } from "../inputs/RegionStatsUpdateWithWhereUniqueWithoutRegionPokemonInput";
import { RegionStatsUpsertWithWhereUniqueWithoutRegionPokemonInput } from "../inputs/RegionStatsUpsertWithWhereUniqueWithoutRegionPokemonInput";
import { RegionStatsWhereUniqueInput } from "../inputs/RegionStatsWhereUniqueInput";

@TypeGraphQL.InputType("RegionStatsUpdateManyWithoutRegionPokemonNestedInput", {
  isAbstract: true
})
export class RegionStatsUpdateManyWithoutRegionPokemonNestedInput {
  @TypeGraphQL.Field(_type => [RegionStatsCreateWithoutRegionPokemonInput], {
    nullable: true
  })
  create?: RegionStatsCreateWithoutRegionPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionStatsCreateOrConnectWithoutRegionPokemonInput], {
    nullable: true
  })
  connectOrCreate?: RegionStatsCreateOrConnectWithoutRegionPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionStatsUpsertWithWhereUniqueWithoutRegionPokemonInput], {
    nullable: true
  })
  upsert?: RegionStatsUpsertWithWhereUniqueWithoutRegionPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => RegionStatsCreateManyRegionPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: RegionStatsCreateManyRegionPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [RegionStatsWhereUniqueInput], {
    nullable: true
  })
  set?: RegionStatsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionStatsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: RegionStatsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionStatsWhereUniqueInput], {
    nullable: true
  })
  delete?: RegionStatsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionStatsWhereUniqueInput], {
    nullable: true
  })
  connect?: RegionStatsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionStatsUpdateWithWhereUniqueWithoutRegionPokemonInput], {
    nullable: true
  })
  update?: RegionStatsUpdateWithWhereUniqueWithoutRegionPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionStatsUpdateManyWithWhereWithoutRegionPokemonInput], {
    nullable: true
  })
  updateMany?: RegionStatsUpdateManyWithWhereWithoutRegionPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionStatsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: RegionStatsScalarWhereInput[] | undefined;
}

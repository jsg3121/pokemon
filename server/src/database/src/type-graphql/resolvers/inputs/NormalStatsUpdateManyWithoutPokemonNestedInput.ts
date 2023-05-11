import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NormalStatsCreateManyPokemonInputEnvelope } from "../inputs/NormalStatsCreateManyPokemonInputEnvelope";
import { NormalStatsCreateOrConnectWithoutPokemonInput } from "../inputs/NormalStatsCreateOrConnectWithoutPokemonInput";
import { NormalStatsCreateWithoutPokemonInput } from "../inputs/NormalStatsCreateWithoutPokemonInput";
import { NormalStatsScalarWhereInput } from "../inputs/NormalStatsScalarWhereInput";
import { NormalStatsUpdateManyWithWhereWithoutPokemonInput } from "../inputs/NormalStatsUpdateManyWithWhereWithoutPokemonInput";
import { NormalStatsUpdateWithWhereUniqueWithoutPokemonInput } from "../inputs/NormalStatsUpdateWithWhereUniqueWithoutPokemonInput";
import { NormalStatsUpsertWithWhereUniqueWithoutPokemonInput } from "../inputs/NormalStatsUpsertWithWhereUniqueWithoutPokemonInput";
import { NormalStatsWhereUniqueInput } from "../inputs/NormalStatsWhereUniqueInput";

@TypeGraphQL.InputType("NormalStatsUpdateManyWithoutPokemonNestedInput", {
  isAbstract: true
})
export class NormalStatsUpdateManyWithoutPokemonNestedInput {
  @TypeGraphQL.Field(_type => [NormalStatsCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: NormalStatsCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [NormalStatsCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: NormalStatsCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [NormalStatsUpsertWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  upsert?: NormalStatsUpsertWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => NormalStatsCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: NormalStatsCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NormalStatsWhereUniqueInput], {
    nullable: true
  })
  set?: NormalStatsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NormalStatsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: NormalStatsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NormalStatsWhereUniqueInput], {
    nullable: true
  })
  delete?: NormalStatsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NormalStatsWhereUniqueInput], {
    nullable: true
  })
  connect?: NormalStatsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NormalStatsUpdateWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  update?: NormalStatsUpdateWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [NormalStatsUpdateManyWithWhereWithoutPokemonInput], {
    nullable: true
  })
  updateMany?: NormalStatsUpdateManyWithWhereWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [NormalStatsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: NormalStatsScalarWhereInput[] | undefined;
}

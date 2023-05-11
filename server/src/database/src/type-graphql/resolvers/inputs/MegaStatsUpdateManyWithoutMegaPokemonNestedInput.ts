import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MegaStatsCreateManyMegaPokemonInputEnvelope } from "../inputs/MegaStatsCreateManyMegaPokemonInputEnvelope";
import { MegaStatsCreateOrConnectWithoutMegaPokemonInput } from "../inputs/MegaStatsCreateOrConnectWithoutMegaPokemonInput";
import { MegaStatsCreateWithoutMegaPokemonInput } from "../inputs/MegaStatsCreateWithoutMegaPokemonInput";
import { MegaStatsScalarWhereInput } from "../inputs/MegaStatsScalarWhereInput";
import { MegaStatsUpdateManyWithWhereWithoutMegaPokemonInput } from "../inputs/MegaStatsUpdateManyWithWhereWithoutMegaPokemonInput";
import { MegaStatsUpdateWithWhereUniqueWithoutMegaPokemonInput } from "../inputs/MegaStatsUpdateWithWhereUniqueWithoutMegaPokemonInput";
import { MegaStatsUpsertWithWhereUniqueWithoutMegaPokemonInput } from "../inputs/MegaStatsUpsertWithWhereUniqueWithoutMegaPokemonInput";
import { MegaStatsWhereUniqueInput } from "../inputs/MegaStatsWhereUniqueInput";

@TypeGraphQL.InputType("MegaStatsUpdateManyWithoutMegaPokemonNestedInput", {
  isAbstract: true
})
export class MegaStatsUpdateManyWithoutMegaPokemonNestedInput {
  @TypeGraphQL.Field(_type => [MegaStatsCreateWithoutMegaPokemonInput], {
    nullable: true
  })
  create?: MegaStatsCreateWithoutMegaPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [MegaStatsCreateOrConnectWithoutMegaPokemonInput], {
    nullable: true
  })
  connectOrCreate?: MegaStatsCreateOrConnectWithoutMegaPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [MegaStatsUpsertWithWhereUniqueWithoutMegaPokemonInput], {
    nullable: true
  })
  upsert?: MegaStatsUpsertWithWhereUniqueWithoutMegaPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => MegaStatsCreateManyMegaPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: MegaStatsCreateManyMegaPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MegaStatsWhereUniqueInput], {
    nullable: true
  })
  set?: MegaStatsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MegaStatsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MegaStatsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MegaStatsWhereUniqueInput], {
    nullable: true
  })
  delete?: MegaStatsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MegaStatsWhereUniqueInput], {
    nullable: true
  })
  connect?: MegaStatsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MegaStatsUpdateWithWhereUniqueWithoutMegaPokemonInput], {
    nullable: true
  })
  update?: MegaStatsUpdateWithWhereUniqueWithoutMegaPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [MegaStatsUpdateManyWithWhereWithoutMegaPokemonInput], {
    nullable: true
  })
  updateMany?: MegaStatsUpdateManyWithWhereWithoutMegaPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [MegaStatsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MegaStatsScalarWhereInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormStatsCreateManyNormalFormPokemonInputEnvelope } from "../inputs/FormStatsCreateManyNormalFormPokemonInputEnvelope";
import { FormStatsCreateOrConnectWithoutNormalFormPokemonInput } from "../inputs/FormStatsCreateOrConnectWithoutNormalFormPokemonInput";
import { FormStatsCreateWithoutNormalFormPokemonInput } from "../inputs/FormStatsCreateWithoutNormalFormPokemonInput";
import { FormStatsScalarWhereInput } from "../inputs/FormStatsScalarWhereInput";
import { FormStatsUpdateManyWithWhereWithoutNormalFormPokemonInput } from "../inputs/FormStatsUpdateManyWithWhereWithoutNormalFormPokemonInput";
import { FormStatsUpdateWithWhereUniqueWithoutNormalFormPokemonInput } from "../inputs/FormStatsUpdateWithWhereUniqueWithoutNormalFormPokemonInput";
import { FormStatsUpsertWithWhereUniqueWithoutNormalFormPokemonInput } from "../inputs/FormStatsUpsertWithWhereUniqueWithoutNormalFormPokemonInput";
import { FormStatsWhereUniqueInput } from "../inputs/FormStatsWhereUniqueInput";

@TypeGraphQL.InputType("FormStatsUpdateManyWithoutNormalFormPokemonNestedInput", {
  isAbstract: true
})
export class FormStatsUpdateManyWithoutNormalFormPokemonNestedInput {
  @TypeGraphQL.Field(_type => [FormStatsCreateWithoutNormalFormPokemonInput], {
    nullable: true
  })
  create?: FormStatsCreateWithoutNormalFormPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormStatsCreateOrConnectWithoutNormalFormPokemonInput], {
    nullable: true
  })
  connectOrCreate?: FormStatsCreateOrConnectWithoutNormalFormPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormStatsUpsertWithWhereUniqueWithoutNormalFormPokemonInput], {
    nullable: true
  })
  upsert?: FormStatsUpsertWithWhereUniqueWithoutNormalFormPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => FormStatsCreateManyNormalFormPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: FormStatsCreateManyNormalFormPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FormStatsWhereUniqueInput], {
    nullable: true
  })
  set?: FormStatsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormStatsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: FormStatsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormStatsWhereUniqueInput], {
    nullable: true
  })
  delete?: FormStatsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormStatsWhereUniqueInput], {
    nullable: true
  })
  connect?: FormStatsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormStatsUpdateWithWhereUniqueWithoutNormalFormPokemonInput], {
    nullable: true
  })
  update?: FormStatsUpdateWithWhereUniqueWithoutNormalFormPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormStatsUpdateManyWithWhereWithoutNormalFormPokemonInput], {
    nullable: true
  })
  updateMany?: FormStatsUpdateManyWithWhereWithoutNormalFormPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormStatsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: FormStatsScalarWhereInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormStatsCreateManyNormalFormPokemonInputEnvelope } from "../inputs/FormStatsCreateManyNormalFormPokemonInputEnvelope";
import { FormStatsCreateOrConnectWithoutNormalFormPokemonInput } from "../inputs/FormStatsCreateOrConnectWithoutNormalFormPokemonInput";
import { FormStatsCreateWithoutNormalFormPokemonInput } from "../inputs/FormStatsCreateWithoutNormalFormPokemonInput";
import { FormStatsWhereUniqueInput } from "../inputs/FormStatsWhereUniqueInput";

@TypeGraphQL.InputType("FormStatsCreateNestedManyWithoutNormalFormPokemonInput", {
  isAbstract: true
})
export class FormStatsCreateNestedManyWithoutNormalFormPokemonInput {
  @TypeGraphQL.Field(_type => [FormStatsCreateWithoutNormalFormPokemonInput], {
    nullable: true
  })
  create?: FormStatsCreateWithoutNormalFormPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormStatsCreateOrConnectWithoutNormalFormPokemonInput], {
    nullable: true
  })
  connectOrCreate?: FormStatsCreateOrConnectWithoutNormalFormPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => FormStatsCreateManyNormalFormPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: FormStatsCreateManyNormalFormPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [FormStatsWhereUniqueInput], {
    nullable: true
  })
  connect?: FormStatsWhereUniqueInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormStatsCreateWithoutNormalFormPokemonInput } from "../inputs/FormStatsCreateWithoutNormalFormPokemonInput";
import { FormStatsWhereUniqueInput } from "../inputs/FormStatsWhereUniqueInput";

@TypeGraphQL.InputType("FormStatsCreateOrConnectWithoutNormalFormPokemonInput", {
  isAbstract: true
})
export class FormStatsCreateOrConnectWithoutNormalFormPokemonInput {
  @TypeGraphQL.Field(_type => FormStatsWhereUniqueInput, {
    nullable: false
  })
  where!: FormStatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => FormStatsCreateWithoutNormalFormPokemonInput, {
    nullable: false
  })
  create!: FormStatsCreateWithoutNormalFormPokemonInput;
}

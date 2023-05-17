import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormStatsCreateWithoutNormalFormPokemonInput } from "../inputs/FormStatsCreateWithoutNormalFormPokemonInput";
import { FormStatsUpdateWithoutNormalFormPokemonInput } from "../inputs/FormStatsUpdateWithoutNormalFormPokemonInput";
import { FormStatsWhereUniqueInput } from "../inputs/FormStatsWhereUniqueInput";

@TypeGraphQL.InputType("FormStatsUpsertWithWhereUniqueWithoutNormalFormPokemonInput", {
  isAbstract: true
})
export class FormStatsUpsertWithWhereUniqueWithoutNormalFormPokemonInput {
  @TypeGraphQL.Field(_type => FormStatsWhereUniqueInput, {
    nullable: false
  })
  where!: FormStatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => FormStatsUpdateWithoutNormalFormPokemonInput, {
    nullable: false
  })
  update!: FormStatsUpdateWithoutNormalFormPokemonInput;

  @TypeGraphQL.Field(_type => FormStatsCreateWithoutNormalFormPokemonInput, {
    nullable: false
  })
  create!: FormStatsCreateWithoutNormalFormPokemonInput;
}

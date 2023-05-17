import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormStatsUpdateWithoutNormalFormPokemonInput } from "../inputs/FormStatsUpdateWithoutNormalFormPokemonInput";
import { FormStatsWhereUniqueInput } from "../inputs/FormStatsWhereUniqueInput";

@TypeGraphQL.InputType("FormStatsUpdateWithWhereUniqueWithoutNormalFormPokemonInput", {
  isAbstract: true
})
export class FormStatsUpdateWithWhereUniqueWithoutNormalFormPokemonInput {
  @TypeGraphQL.Field(_type => FormStatsWhereUniqueInput, {
    nullable: false
  })
  where!: FormStatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => FormStatsUpdateWithoutNormalFormPokemonInput, {
    nullable: false
  })
  data!: FormStatsUpdateWithoutNormalFormPokemonInput;
}

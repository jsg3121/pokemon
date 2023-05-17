import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormStatsScalarWhereInput } from "../inputs/FormStatsScalarWhereInput";
import { FormStatsUpdateManyMutationInput } from "../inputs/FormStatsUpdateManyMutationInput";

@TypeGraphQL.InputType("FormStatsUpdateManyWithWhereWithoutNormalFormPokemonInput", {
  isAbstract: true
})
export class FormStatsUpdateManyWithWhereWithoutNormalFormPokemonInput {
  @TypeGraphQL.Field(_type => FormStatsScalarWhereInput, {
    nullable: false
  })
  where!: FormStatsScalarWhereInput;

  @TypeGraphQL.Field(_type => FormStatsUpdateManyMutationInput, {
    nullable: false
  })
  data!: FormStatsUpdateManyMutationInput;
}

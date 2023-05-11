import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormStatsCreateManyNormalFormPokemonInput } from "../inputs/FormStatsCreateManyNormalFormPokemonInput";

@TypeGraphQL.InputType("FormStatsCreateManyNormalFormPokemonInputEnvelope", {
  isAbstract: true
})
export class FormStatsCreateManyNormalFormPokemonInputEnvelope {
  @TypeGraphQL.Field(_type => [FormStatsCreateManyNormalFormPokemonInput], {
    nullable: false
  })
  data!: FormStatsCreateManyNormalFormPokemonInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

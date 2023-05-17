import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MegaStatsScalarWhereInput } from "../inputs/MegaStatsScalarWhereInput";
import { MegaStatsUpdateManyMutationInput } from "../inputs/MegaStatsUpdateManyMutationInput";

@TypeGraphQL.InputType("MegaStatsUpdateManyWithWhereWithoutMegaPokemonInput", {
  isAbstract: true
})
export class MegaStatsUpdateManyWithWhereWithoutMegaPokemonInput {
  @TypeGraphQL.Field(_type => MegaStatsScalarWhereInput, {
    nullable: false
  })
  where!: MegaStatsScalarWhereInput;

  @TypeGraphQL.Field(_type => MegaStatsUpdateManyMutationInput, {
    nullable: false
  })
  data!: MegaStatsUpdateManyMutationInput;
}

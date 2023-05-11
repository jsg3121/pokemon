import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NormalStatsScalarWhereInput } from "../inputs/NormalStatsScalarWhereInput";
import { NormalStatsUpdateManyMutationInput } from "../inputs/NormalStatsUpdateManyMutationInput";

@TypeGraphQL.InputType("NormalStatsUpdateManyWithWhereWithoutPokemonInput", {
  isAbstract: true
})
export class NormalStatsUpdateManyWithWhereWithoutPokemonInput {
  @TypeGraphQL.Field(_type => NormalStatsScalarWhereInput, {
    nullable: false
  })
  where!: NormalStatsScalarWhereInput;

  @TypeGraphQL.Field(_type => NormalStatsUpdateManyMutationInput, {
    nullable: false
  })
  data!: NormalStatsUpdateManyMutationInput;
}

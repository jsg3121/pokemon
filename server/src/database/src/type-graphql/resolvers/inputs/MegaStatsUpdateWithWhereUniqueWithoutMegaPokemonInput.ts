import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MegaStatsUpdateWithoutMegaPokemonInput } from "../inputs/MegaStatsUpdateWithoutMegaPokemonInput";
import { MegaStatsWhereUniqueInput } from "../inputs/MegaStatsWhereUniqueInput";

@TypeGraphQL.InputType("MegaStatsUpdateWithWhereUniqueWithoutMegaPokemonInput", {
  isAbstract: true
})
export class MegaStatsUpdateWithWhereUniqueWithoutMegaPokemonInput {
  @TypeGraphQL.Field(_type => MegaStatsWhereUniqueInput, {
    nullable: false
  })
  where!: MegaStatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => MegaStatsUpdateWithoutMegaPokemonInput, {
    nullable: false
  })
  data!: MegaStatsUpdateWithoutMegaPokemonInput;
}

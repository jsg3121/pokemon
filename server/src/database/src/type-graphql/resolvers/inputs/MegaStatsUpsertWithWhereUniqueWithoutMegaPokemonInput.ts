import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MegaStatsCreateWithoutMegaPokemonInput } from "../inputs/MegaStatsCreateWithoutMegaPokemonInput";
import { MegaStatsUpdateWithoutMegaPokemonInput } from "../inputs/MegaStatsUpdateWithoutMegaPokemonInput";
import { MegaStatsWhereUniqueInput } from "../inputs/MegaStatsWhereUniqueInput";

@TypeGraphQL.InputType("MegaStatsUpsertWithWhereUniqueWithoutMegaPokemonInput", {
  isAbstract: true
})
export class MegaStatsUpsertWithWhereUniqueWithoutMegaPokemonInput {
  @TypeGraphQL.Field(_type => MegaStatsWhereUniqueInput, {
    nullable: false
  })
  where!: MegaStatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => MegaStatsUpdateWithoutMegaPokemonInput, {
    nullable: false
  })
  update!: MegaStatsUpdateWithoutMegaPokemonInput;

  @TypeGraphQL.Field(_type => MegaStatsCreateWithoutMegaPokemonInput, {
    nullable: false
  })
  create!: MegaStatsCreateWithoutMegaPokemonInput;
}

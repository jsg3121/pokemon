import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NormalStatsUpdateWithoutPokemonInput } from "../inputs/NormalStatsUpdateWithoutPokemonInput";
import { NormalStatsWhereUniqueInput } from "../inputs/NormalStatsWhereUniqueInput";

@TypeGraphQL.InputType("NormalStatsUpdateWithWhereUniqueWithoutPokemonInput", {
  isAbstract: true
})
export class NormalStatsUpdateWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => NormalStatsWhereUniqueInput, {
    nullable: false
  })
  where!: NormalStatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => NormalStatsUpdateWithoutPokemonInput, {
    nullable: false
  })
  data!: NormalStatsUpdateWithoutPokemonInput;
}

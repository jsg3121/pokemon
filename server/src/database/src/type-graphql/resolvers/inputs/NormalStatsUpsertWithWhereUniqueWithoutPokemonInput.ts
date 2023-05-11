import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NormalStatsCreateWithoutPokemonInput } from "../inputs/NormalStatsCreateWithoutPokemonInput";
import { NormalStatsUpdateWithoutPokemonInput } from "../inputs/NormalStatsUpdateWithoutPokemonInput";
import { NormalStatsWhereUniqueInput } from "../inputs/NormalStatsWhereUniqueInput";

@TypeGraphQL.InputType("NormalStatsUpsertWithWhereUniqueWithoutPokemonInput", {
  isAbstract: true
})
export class NormalStatsUpsertWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => NormalStatsWhereUniqueInput, {
    nullable: false
  })
  where!: NormalStatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => NormalStatsUpdateWithoutPokemonInput, {
    nullable: false
  })
  update!: NormalStatsUpdateWithoutPokemonInput;

  @TypeGraphQL.Field(_type => NormalStatsCreateWithoutPokemonInput, {
    nullable: false
  })
  create!: NormalStatsCreateWithoutPokemonInput;
}

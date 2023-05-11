import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateWithoutNormalStatsInput } from "../inputs/PokemonCreateWithoutNormalStatsInput";
import { PokemonUpdateWithoutNormalStatsInput } from "../inputs/PokemonUpdateWithoutNormalStatsInput";

@TypeGraphQL.InputType("PokemonUpsertWithoutNormalStatsInput", {
  isAbstract: true
})
export class PokemonUpsertWithoutNormalStatsInput {
  @TypeGraphQL.Field(_type => PokemonUpdateWithoutNormalStatsInput, {
    nullable: false
  })
  update!: PokemonUpdateWithoutNormalStatsInput;

  @TypeGraphQL.Field(_type => PokemonCreateWithoutNormalStatsInput, {
    nullable: false
  })
  create!: PokemonCreateWithoutNormalStatsInput;
}

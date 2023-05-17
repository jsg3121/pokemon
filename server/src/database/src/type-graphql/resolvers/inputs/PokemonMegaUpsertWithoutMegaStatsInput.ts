import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMegaCreateWithoutMegaStatsInput } from "../inputs/PokemonMegaCreateWithoutMegaStatsInput";
import { PokemonMegaUpdateWithoutMegaStatsInput } from "../inputs/PokemonMegaUpdateWithoutMegaStatsInput";

@TypeGraphQL.InputType("PokemonMegaUpsertWithoutMegaStatsInput", {
  isAbstract: true
})
export class PokemonMegaUpsertWithoutMegaStatsInput {
  @TypeGraphQL.Field(_type => PokemonMegaUpdateWithoutMegaStatsInput, {
    nullable: false
  })
  update!: PokemonMegaUpdateWithoutMegaStatsInput;

  @TypeGraphQL.Field(_type => PokemonMegaCreateWithoutMegaStatsInput, {
    nullable: false
  })
  create!: PokemonMegaCreateWithoutMegaStatsInput;
}

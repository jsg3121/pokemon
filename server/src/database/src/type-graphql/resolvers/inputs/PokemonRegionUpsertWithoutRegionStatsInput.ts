import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonRegionCreateWithoutRegionStatsInput } from "../inputs/PokemonRegionCreateWithoutRegionStatsInput";
import { PokemonRegionUpdateWithoutRegionStatsInput } from "../inputs/PokemonRegionUpdateWithoutRegionStatsInput";

@TypeGraphQL.InputType("PokemonRegionUpsertWithoutRegionStatsInput", {
  isAbstract: true
})
export class PokemonRegionUpsertWithoutRegionStatsInput {
  @TypeGraphQL.Field(_type => PokemonRegionUpdateWithoutRegionStatsInput, {
    nullable: false
  })
  update!: PokemonRegionUpdateWithoutRegionStatsInput;

  @TypeGraphQL.Field(_type => PokemonRegionCreateWithoutRegionStatsInput, {
    nullable: false
  })
  create!: PokemonRegionCreateWithoutRegionStatsInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonRegionCreateWithoutRegionStatsInput } from "../inputs/PokemonRegionCreateWithoutRegionStatsInput";
import { PokemonRegionWhereUniqueInput } from "../inputs/PokemonRegionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonRegionCreateOrConnectWithoutRegionStatsInput", {
  isAbstract: true
})
export class PokemonRegionCreateOrConnectWithoutRegionStatsInput {
  @TypeGraphQL.Field(_type => PokemonRegionWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonRegionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonRegionCreateWithoutRegionStatsInput, {
    nullable: false
  })
  create!: PokemonRegionCreateWithoutRegionStatsInput;
}

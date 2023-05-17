import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonRegionCreateOrConnectWithoutRegionStatsInput } from "../inputs/PokemonRegionCreateOrConnectWithoutRegionStatsInput";
import { PokemonRegionCreateWithoutRegionStatsInput } from "../inputs/PokemonRegionCreateWithoutRegionStatsInput";
import { PokemonRegionWhereUniqueInput } from "../inputs/PokemonRegionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonRegionCreateNestedOneWithoutRegionStatsInput", {
  isAbstract: true
})
export class PokemonRegionCreateNestedOneWithoutRegionStatsInput {
  @TypeGraphQL.Field(_type => PokemonRegionCreateWithoutRegionStatsInput, {
    nullable: true
  })
  create?: PokemonRegionCreateWithoutRegionStatsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonRegionCreateOrConnectWithoutRegionStatsInput, {
    nullable: true
  })
  connectOrCreate?: PokemonRegionCreateOrConnectWithoutRegionStatsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonRegionWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonRegionWhereUniqueInput | undefined;
}

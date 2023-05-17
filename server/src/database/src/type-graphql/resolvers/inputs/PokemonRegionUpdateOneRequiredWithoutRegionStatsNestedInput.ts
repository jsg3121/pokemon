import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonRegionCreateOrConnectWithoutRegionStatsInput } from "../inputs/PokemonRegionCreateOrConnectWithoutRegionStatsInput";
import { PokemonRegionCreateWithoutRegionStatsInput } from "../inputs/PokemonRegionCreateWithoutRegionStatsInput";
import { PokemonRegionUpdateWithoutRegionStatsInput } from "../inputs/PokemonRegionUpdateWithoutRegionStatsInput";
import { PokemonRegionUpsertWithoutRegionStatsInput } from "../inputs/PokemonRegionUpsertWithoutRegionStatsInput";
import { PokemonRegionWhereUniqueInput } from "../inputs/PokemonRegionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonRegionUpdateOneRequiredWithoutRegionStatsNestedInput", {
  isAbstract: true
})
export class PokemonRegionUpdateOneRequiredWithoutRegionStatsNestedInput {
  @TypeGraphQL.Field(_type => PokemonRegionCreateWithoutRegionStatsInput, {
    nullable: true
  })
  create?: PokemonRegionCreateWithoutRegionStatsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonRegionCreateOrConnectWithoutRegionStatsInput, {
    nullable: true
  })
  connectOrCreate?: PokemonRegionCreateOrConnectWithoutRegionStatsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonRegionUpsertWithoutRegionStatsInput, {
    nullable: true
  })
  upsert?: PokemonRegionUpsertWithoutRegionStatsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonRegionWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonRegionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokemonRegionUpdateWithoutRegionStatsInput, {
    nullable: true
  })
  update?: PokemonRegionUpdateWithoutRegionStatsInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateOrConnectWithoutNormalStatsInput } from "../inputs/PokemonCreateOrConnectWithoutNormalStatsInput";
import { PokemonCreateWithoutNormalStatsInput } from "../inputs/PokemonCreateWithoutNormalStatsInput";
import { PokemonUpdateWithoutNormalStatsInput } from "../inputs/PokemonUpdateWithoutNormalStatsInput";
import { PokemonUpsertWithoutNormalStatsInput } from "../inputs/PokemonUpsertWithoutNormalStatsInput";
import { PokemonWhereUniqueInput } from "../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.InputType("PokemonUpdateOneRequiredWithoutNormalStatsNestedInput", {
  isAbstract: true
})
export class PokemonUpdateOneRequiredWithoutNormalStatsNestedInput {
  @TypeGraphQL.Field(_type => PokemonCreateWithoutNormalStatsInput, {
    nullable: true
  })
  create?: PokemonCreateWithoutNormalStatsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonCreateOrConnectWithoutNormalStatsInput, {
    nullable: true
  })
  connectOrCreate?: PokemonCreateOrConnectWithoutNormalStatsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpsertWithoutNormalStatsInput, {
    nullable: true
  })
  upsert?: PokemonUpsertWithoutNormalStatsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpdateWithoutNormalStatsInput, {
    nullable: true
  })
  update?: PokemonUpdateWithoutNormalStatsInput | undefined;
}

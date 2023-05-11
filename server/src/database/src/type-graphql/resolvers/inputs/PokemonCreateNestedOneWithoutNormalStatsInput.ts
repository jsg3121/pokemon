import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateOrConnectWithoutNormalStatsInput } from "../inputs/PokemonCreateOrConnectWithoutNormalStatsInput";
import { PokemonCreateWithoutNormalStatsInput } from "../inputs/PokemonCreateWithoutNormalStatsInput";
import { PokemonWhereUniqueInput } from "../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.InputType("PokemonCreateNestedOneWithoutNormalStatsInput", {
  isAbstract: true
})
export class PokemonCreateNestedOneWithoutNormalStatsInput {
  @TypeGraphQL.Field(_type => PokemonCreateWithoutNormalStatsInput, {
    nullable: true
  })
  create?: PokemonCreateWithoutNormalStatsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonCreateOrConnectWithoutNormalStatsInput, {
    nullable: true
  })
  connectOrCreate?: PokemonCreateOrConnectWithoutNormalStatsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonWhereUniqueInput | undefined;
}

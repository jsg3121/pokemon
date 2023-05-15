import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NormalStatsCreateOrConnectWithoutPokemonInput } from "../inputs/NormalStatsCreateOrConnectWithoutPokemonInput";
import { NormalStatsCreateWithoutPokemonInput } from "../inputs/NormalStatsCreateWithoutPokemonInput";
import { NormalStatsUpdateWithoutPokemonInput } from "../inputs/NormalStatsUpdateWithoutPokemonInput";
import { NormalStatsUpsertWithoutPokemonInput } from "../inputs/NormalStatsUpsertWithoutPokemonInput";
import { NormalStatsWhereUniqueInput } from "../inputs/NormalStatsWhereUniqueInput";

@TypeGraphQL.InputType("NormalStatsUpdateOneWithoutPokemonNestedInput", {
  isAbstract: true
})
export class NormalStatsUpdateOneWithoutPokemonNestedInput {
  @TypeGraphQL.Field(_type => NormalStatsCreateWithoutPokemonInput, {
    nullable: true
  })
  create?: NormalStatsCreateWithoutPokemonInput | undefined;

  @TypeGraphQL.Field(_type => NormalStatsCreateOrConnectWithoutPokemonInput, {
    nullable: true
  })
  connectOrCreate?: NormalStatsCreateOrConnectWithoutPokemonInput | undefined;

  @TypeGraphQL.Field(_type => NormalStatsUpsertWithoutPokemonInput, {
    nullable: true
  })
  upsert?: NormalStatsUpsertWithoutPokemonInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => NormalStatsWhereUniqueInput, {
    nullable: true
  })
  connect?: NormalStatsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => NormalStatsUpdateWithoutPokemonInput, {
    nullable: true
  })
  update?: NormalStatsUpdateWithoutPokemonInput | undefined;
}

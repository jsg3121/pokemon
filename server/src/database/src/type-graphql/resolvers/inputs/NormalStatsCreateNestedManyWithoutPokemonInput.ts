import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NormalStatsCreateManyPokemonInputEnvelope } from "../inputs/NormalStatsCreateManyPokemonInputEnvelope";
import { NormalStatsCreateOrConnectWithoutPokemonInput } from "../inputs/NormalStatsCreateOrConnectWithoutPokemonInput";
import { NormalStatsCreateWithoutPokemonInput } from "../inputs/NormalStatsCreateWithoutPokemonInput";
import { NormalStatsWhereUniqueInput } from "../inputs/NormalStatsWhereUniqueInput";

@TypeGraphQL.InputType("NormalStatsCreateNestedManyWithoutPokemonInput", {
  isAbstract: true
})
export class NormalStatsCreateNestedManyWithoutPokemonInput {
  @TypeGraphQL.Field(_type => [NormalStatsCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: NormalStatsCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [NormalStatsCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: NormalStatsCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => NormalStatsCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: NormalStatsCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NormalStatsWhereUniqueInput], {
    nullable: true
  })
  connect?: NormalStatsWhereUniqueInput[] | undefined;
}

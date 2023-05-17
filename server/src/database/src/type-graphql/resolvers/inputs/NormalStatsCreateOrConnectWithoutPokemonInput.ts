import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NormalStatsCreateWithoutPokemonInput } from "../inputs/NormalStatsCreateWithoutPokemonInput";
import { NormalStatsWhereUniqueInput } from "../inputs/NormalStatsWhereUniqueInput";

@TypeGraphQL.InputType("NormalStatsCreateOrConnectWithoutPokemonInput", {
  isAbstract: true
})
export class NormalStatsCreateOrConnectWithoutPokemonInput {
  @TypeGraphQL.Field(_type => NormalStatsWhereUniqueInput, {
    nullable: false
  })
  where!: NormalStatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => NormalStatsCreateWithoutPokemonInput, {
    nullable: false
  })
  create!: NormalStatsCreateWithoutPokemonInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateWithoutNormalStatsInput } from "../inputs/PokemonCreateWithoutNormalStatsInput";
import { PokemonWhereUniqueInput } from "../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.InputType("PokemonCreateOrConnectWithoutNormalStatsInput", {
  isAbstract: true
})
export class PokemonCreateOrConnectWithoutNormalStatsInput {
  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonCreateWithoutNormalStatsInput, {
    nullable: false
  })
  create!: PokemonCreateWithoutNormalStatsInput;
}

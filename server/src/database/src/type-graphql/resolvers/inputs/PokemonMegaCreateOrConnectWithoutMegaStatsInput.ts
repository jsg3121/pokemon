import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMegaCreateWithoutMegaStatsInput } from "../inputs/PokemonMegaCreateWithoutMegaStatsInput";
import { PokemonMegaWhereUniqueInput } from "../inputs/PokemonMegaWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMegaCreateOrConnectWithoutMegaStatsInput", {
  isAbstract: true
})
export class PokemonMegaCreateOrConnectWithoutMegaStatsInput {
  @TypeGraphQL.Field(_type => PokemonMegaWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMegaWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonMegaCreateWithoutMegaStatsInput, {
    nullable: false
  })
  create!: PokemonMegaCreateWithoutMegaStatsInput;
}

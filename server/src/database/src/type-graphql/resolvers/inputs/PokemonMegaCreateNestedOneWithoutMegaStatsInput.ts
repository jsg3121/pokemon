import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMegaCreateOrConnectWithoutMegaStatsInput } from "../inputs/PokemonMegaCreateOrConnectWithoutMegaStatsInput";
import { PokemonMegaCreateWithoutMegaStatsInput } from "../inputs/PokemonMegaCreateWithoutMegaStatsInput";
import { PokemonMegaWhereUniqueInput } from "../inputs/PokemonMegaWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMegaCreateNestedOneWithoutMegaStatsInput", {
  isAbstract: true
})
export class PokemonMegaCreateNestedOneWithoutMegaStatsInput {
  @TypeGraphQL.Field(_type => PokemonMegaCreateWithoutMegaStatsInput, {
    nullable: true
  })
  create?: PokemonMegaCreateWithoutMegaStatsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMegaCreateOrConnectWithoutMegaStatsInput, {
    nullable: true
  })
  connectOrCreate?: PokemonMegaCreateOrConnectWithoutMegaStatsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMegaWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonMegaWhereUniqueInput | undefined;
}

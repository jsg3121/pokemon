import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonNormalFormCreateOrConnectWithoutFormStatsInput } from "../inputs/PokemonNormalFormCreateOrConnectWithoutFormStatsInput";
import { PokemonNormalFormCreateWithoutFormStatsInput } from "../inputs/PokemonNormalFormCreateWithoutFormStatsInput";
import { PokemonNormalFormWhereUniqueInput } from "../inputs/PokemonNormalFormWhereUniqueInput";

@TypeGraphQL.InputType("PokemonNormalFormCreateNestedOneWithoutFormStatsInput", {
  isAbstract: true
})
export class PokemonNormalFormCreateNestedOneWithoutFormStatsInput {
  @TypeGraphQL.Field(_type => PokemonNormalFormCreateWithoutFormStatsInput, {
    nullable: true
  })
  create?: PokemonNormalFormCreateWithoutFormStatsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonNormalFormCreateOrConnectWithoutFormStatsInput, {
    nullable: true
  })
  connectOrCreate?: PokemonNormalFormCreateOrConnectWithoutFormStatsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonNormalFormWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonNormalFormWhereUniqueInput | undefined;
}

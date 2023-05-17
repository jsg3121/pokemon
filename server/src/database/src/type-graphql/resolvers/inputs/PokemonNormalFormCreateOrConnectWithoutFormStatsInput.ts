import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonNormalFormCreateWithoutFormStatsInput } from "../inputs/PokemonNormalFormCreateWithoutFormStatsInput";
import { PokemonNormalFormWhereUniqueInput } from "../inputs/PokemonNormalFormWhereUniqueInput";

@TypeGraphQL.InputType("PokemonNormalFormCreateOrConnectWithoutFormStatsInput", {
  isAbstract: true
})
export class PokemonNormalFormCreateOrConnectWithoutFormStatsInput {
  @TypeGraphQL.Field(_type => PokemonNormalFormWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonNormalFormWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonNormalFormCreateWithoutFormStatsInput, {
    nullable: false
  })
  create!: PokemonNormalFormCreateWithoutFormStatsInput;
}

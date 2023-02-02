import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateWithoutPokemonRegionInput } from "../inputs/PokemonCreateWithoutPokemonRegionInput";
import { PokemonWhereUniqueInput } from "../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.InputType("PokemonCreateOrConnectWithoutPokemonRegionInput", {
  isAbstract: true
})
export class PokemonCreateOrConnectWithoutPokemonRegionInput {
  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonCreateWithoutPokemonRegionInput, {
    nullable: false
  })
  create!: PokemonCreateWithoutPokemonRegionInput;
}

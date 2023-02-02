import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonRegionCreateWithoutPokemonInput } from "../inputs/PokemonRegionCreateWithoutPokemonInput";
import { PokemonRegionWhereUniqueInput } from "../inputs/PokemonRegionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonRegionCreateOrConnectWithoutPokemonInput", {
  isAbstract: true
})
export class PokemonRegionCreateOrConnectWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonRegionWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonRegionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonRegionCreateWithoutPokemonInput, {
    nullable: false
  })
  create!: PokemonRegionCreateWithoutPokemonInput;
}

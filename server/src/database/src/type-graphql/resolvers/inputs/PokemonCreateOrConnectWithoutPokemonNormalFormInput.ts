import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateWithoutPokemonNormalFormInput } from "../inputs/PokemonCreateWithoutPokemonNormalFormInput";
import { PokemonWhereUniqueInput } from "../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.InputType("PokemonCreateOrConnectWithoutPokemonNormalFormInput", {
  isAbstract: true
})
export class PokemonCreateOrConnectWithoutPokemonNormalFormInput {
  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonCreateWithoutPokemonNormalFormInput, {
    nullable: false
  })
  create!: PokemonCreateWithoutPokemonNormalFormInput;
}

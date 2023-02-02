import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateWithoutPokemonMegaInput } from "../inputs/PokemonCreateWithoutPokemonMegaInput";
import { PokemonWhereUniqueInput } from "../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.InputType("PokemonCreateOrConnectWithoutPokemonMegaInput", {
  isAbstract: true
})
export class PokemonCreateOrConnectWithoutPokemonMegaInput {
  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonCreateWithoutPokemonMegaInput, {
    nullable: false
  })
  create!: PokemonCreateWithoutPokemonMegaInput;
}

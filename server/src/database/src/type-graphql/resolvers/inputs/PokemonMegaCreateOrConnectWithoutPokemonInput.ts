import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMegaCreateWithoutPokemonInput } from "../inputs/PokemonMegaCreateWithoutPokemonInput";
import { PokemonMegaWhereUniqueInput } from "../inputs/PokemonMegaWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMegaCreateOrConnectWithoutPokemonInput", {
  isAbstract: true
})
export class PokemonMegaCreateOrConnectWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonMegaWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMegaWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonMegaCreateWithoutPokemonInput, {
    nullable: false
  })
  create!: PokemonMegaCreateWithoutPokemonInput;
}

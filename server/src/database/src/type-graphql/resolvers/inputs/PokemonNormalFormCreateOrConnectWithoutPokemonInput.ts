import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonNormalFormCreateWithoutPokemonInput } from "../inputs/PokemonNormalFormCreateWithoutPokemonInput";
import { PokemonNormalFormWhereUniqueInput } from "../inputs/PokemonNormalFormWhereUniqueInput";

@TypeGraphQL.InputType("PokemonNormalFormCreateOrConnectWithoutPokemonInput", {
  isAbstract: true
})
export class PokemonNormalFormCreateOrConnectWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonNormalFormWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonNormalFormWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonNormalFormCreateWithoutPokemonInput, {
    nullable: false
  })
  create!: PokemonNormalFormCreateWithoutPokemonInput;
}

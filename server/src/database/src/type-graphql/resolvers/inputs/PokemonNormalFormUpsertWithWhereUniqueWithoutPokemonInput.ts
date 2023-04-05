import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonNormalFormCreateWithoutPokemonInput } from "../inputs/PokemonNormalFormCreateWithoutPokemonInput";
import { PokemonNormalFormUpdateWithoutPokemonInput } from "../inputs/PokemonNormalFormUpdateWithoutPokemonInput";
import { PokemonNormalFormWhereUniqueInput } from "../inputs/PokemonNormalFormWhereUniqueInput";

@TypeGraphQL.InputType("PokemonNormalFormUpsertWithWhereUniqueWithoutPokemonInput", {
  isAbstract: true
})
export class PokemonNormalFormUpsertWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonNormalFormWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonNormalFormWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonNormalFormUpdateWithoutPokemonInput, {
    nullable: false
  })
  update!: PokemonNormalFormUpdateWithoutPokemonInput;

  @TypeGraphQL.Field(_type => PokemonNormalFormCreateWithoutPokemonInput, {
    nullable: false
  })
  create!: PokemonNormalFormCreateWithoutPokemonInput;
}

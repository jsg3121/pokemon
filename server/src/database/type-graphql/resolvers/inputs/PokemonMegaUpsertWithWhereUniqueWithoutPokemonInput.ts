import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMegaCreateWithoutPokemonInput } from "../inputs/PokemonMegaCreateWithoutPokemonInput";
import { PokemonMegaUpdateWithoutPokemonInput } from "../inputs/PokemonMegaUpdateWithoutPokemonInput";
import { PokemonMegaWhereUniqueInput } from "../inputs/PokemonMegaWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMegaUpsertWithWhereUniqueWithoutPokemonInput", {
  isAbstract: true
})
export class PokemonMegaUpsertWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonMegaWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonMegaWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonMegaUpdateWithoutPokemonInput, {
    nullable: false
  })
  update!: PokemonMegaUpdateWithoutPokemonInput;

  @TypeGraphQL.Field(_type => PokemonMegaCreateWithoutPokemonInput, {
    nullable: false
  })
  create!: PokemonMegaCreateWithoutPokemonInput;
}

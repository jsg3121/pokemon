import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonRegionUpdateWithoutPokemonInput } from "../inputs/PokemonRegionUpdateWithoutPokemonInput";
import { PokemonRegionWhereUniqueInput } from "../inputs/PokemonRegionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonRegionUpdateWithWhereUniqueWithoutPokemonInput", {
  isAbstract: true
})
export class PokemonRegionUpdateWithWhereUniqueWithoutPokemonInput {
  @TypeGraphQL.Field(_type => PokemonRegionWhereUniqueInput, {
    nullable: false
  })
  where!: PokemonRegionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PokemonRegionUpdateWithoutPokemonInput, {
    nullable: false
  })
  data!: PokemonRegionUpdateWithoutPokemonInput;
}

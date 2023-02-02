import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateNestedOneWithoutPokemonRegionInput } from "../inputs/PokemonCreateNestedOneWithoutPokemonRegionInput";

@TypeGraphQL.InputType("PokemonRegionCreateInput", {
  isAbstract: true
})
export class PokemonRegionCreateInput {
  @TypeGraphQL.Field(_type => PokemonCreateNestedOneWithoutPokemonRegionInput, {
    nullable: false
  })
  pokemon!: PokemonCreateNestedOneWithoutPokemonRegionInput;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokemonNumber!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  region!: string;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  type?: string[] | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  typeSingle1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  typeSingle2?: string | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonUpdateOneRequiredWithoutPokemonRegionNestedInput } from "../inputs/PokemonUpdateOneRequiredWithoutPokemonRegionNestedInput";

@TypeGraphQL.InputType("PokemonRegionUpdateInput", {
  isAbstract: true
})
export class PokemonRegionUpdateInput {
  @TypeGraphQL.Field(_type => PokemonUpdateOneRequiredWithoutPokemonRegionNestedInput, {
    nullable: true
  })
  pokemon?: PokemonUpdateOneRequiredWithoutPokemonRegionNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  pokemonNumber?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  region?: string | undefined;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  type?: string[] | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  typeSingle1?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  typeSingle2?: string | undefined;
}

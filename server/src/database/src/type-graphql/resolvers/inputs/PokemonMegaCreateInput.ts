import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateNestedOneWithoutPokemonMegaInput } from "../inputs/PokemonCreateNestedOneWithoutPokemonMegaInput";

@TypeGraphQL.InputType("PokemonMegaCreateInput", {
  isAbstract: true
})
export class PokemonMegaCreateInput {
  @TypeGraphQL.Field(_type => PokemonCreateNestedOneWithoutPokemonMegaInput, {
    nullable: false
  })
  pokemon!: PokemonCreateNestedOneWithoutPokemonMegaInput;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokemonNumber!: number;

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

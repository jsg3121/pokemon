import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonNormalFormCreateNestedOneWithoutFormStatsInput } from "../inputs/PokemonNormalFormCreateNestedOneWithoutFormStatsInput";

@TypeGraphQL.InputType("FormStatsCreateInput", {
  isAbstract: true
})
export class FormStatsCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  hp!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  attack!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  defense!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  specialAttack!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  specialDefense!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  speed!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  total!: number;

  @TypeGraphQL.Field(_type => PokemonNormalFormCreateNestedOneWithoutFormStatsInput, {
    nullable: false
  })
  normalFormPokemon!: PokemonNormalFormCreateNestedOneWithoutFormStatsInput;
}

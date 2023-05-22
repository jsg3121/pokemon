import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormStatsCreateNestedManyWithoutNormalFormPokemonInput } from "../inputs/FormStatsCreateNestedManyWithoutNormalFormPokemonInput";
import { PokemonCreateNestedOneWithoutPokemonNormalFormInput } from "../inputs/PokemonCreateNestedOneWithoutPokemonNormalFormInput";

@TypeGraphQL.InputType("PokemonNormalFormCreateInput", {
  isAbstract: true
})
export class PokemonNormalFormCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  imagePath!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  statCode!: string;

  @TypeGraphQL.Field(_type => FormStatsCreateNestedManyWithoutNormalFormPokemonInput, {
    nullable: true
  })
  FormStats?: FormStatsCreateNestedManyWithoutNormalFormPokemonInput | undefined;

  @TypeGraphQL.Field(_type => PokemonCreateNestedOneWithoutPokemonNormalFormInput, {
    nullable: false
  })
  pokemon!: PokemonCreateNestedOneWithoutPokemonNormalFormInput;
}

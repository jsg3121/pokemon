import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonNormalFormCreateWithoutFormStatsInput } from "../inputs/PokemonNormalFormCreateWithoutFormStatsInput";
import { PokemonNormalFormUpdateWithoutFormStatsInput } from "../inputs/PokemonNormalFormUpdateWithoutFormStatsInput";

@TypeGraphQL.InputType("PokemonNormalFormUpsertWithoutFormStatsInput", {
  isAbstract: true
})
export class PokemonNormalFormUpsertWithoutFormStatsInput {
  @TypeGraphQL.Field(_type => PokemonNormalFormUpdateWithoutFormStatsInput, {
    nullable: false
  })
  update!: PokemonNormalFormUpdateWithoutFormStatsInput;

  @TypeGraphQL.Field(_type => PokemonNormalFormCreateWithoutFormStatsInput, {
    nullable: false
  })
  create!: PokemonNormalFormCreateWithoutFormStatsInput;
}

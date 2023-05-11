import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonNormalFormUpdateOneRequiredWithoutFormStatsNestedInput } from "../inputs/PokemonNormalFormUpdateOneRequiredWithoutFormStatsNestedInput";

@TypeGraphQL.InputType("FormStatsUpdateInput", {
  isAbstract: true
})
export class FormStatsUpdateInput {
  @TypeGraphQL.Field(_type => PokemonNormalFormUpdateOneRequiredWithoutFormStatsNestedInput, {
    nullable: true
  })
  normalFormPokemon?: PokemonNormalFormUpdateOneRequiredWithoutFormStatsNestedInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  hp?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  attack?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  defense?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  specialAttack?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  specialDefense?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  speed?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  total?: number | undefined;
}

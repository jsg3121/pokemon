import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMegaUpdateOneRequiredWithoutMegaStatsNestedInput } from "../inputs/PokemonMegaUpdateOneRequiredWithoutMegaStatsNestedInput";

@TypeGraphQL.InputType("MegaStatsUpdateInput", {
  isAbstract: true
})
export class MegaStatsUpdateInput {
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

  @TypeGraphQL.Field(_type => PokemonMegaUpdateOneRequiredWithoutMegaStatsNestedInput, {
    nullable: true
  })
  megaPokemon?: PokemonMegaUpdateOneRequiredWithoutMegaStatsNestedInput | undefined;
}

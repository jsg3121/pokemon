import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonUpdateOneRequiredWithoutPokemonNormalFormNestedInput } from "../inputs/PokemonUpdateOneRequiredWithoutPokemonNormalFormNestedInput";

@TypeGraphQL.InputType("PokemonNormalFormUpdateWithoutFormStatsInput", {
  isAbstract: true
})
export class PokemonNormalFormUpdateWithoutFormStatsInput {
  @TypeGraphQL.Field(_type => PokemonUpdateOneRequiredWithoutPokemonNormalFormNestedInput, {
    nullable: true
  })
  pokemon?: PokemonUpdateOneRequiredWithoutPokemonNormalFormNestedInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  imagePath?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  statCode?: string | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PokemonMegaUpdatetypeInput } from "../inputs/PokemonMegaUpdatetypeInput";
import { PokemonUpdateOneRequiredWithoutPokemonMegaNestedInput } from "../inputs/PokemonUpdateOneRequiredWithoutPokemonMegaNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PokemonMegaUpdateInput", {
  isAbstract: true
})
export class PokemonMegaUpdateInput {
  @TypeGraphQL.Field(_type => PokemonUpdateOneRequiredWithoutPokemonMegaNestedInput, {
    nullable: true
  })
  pokemon?: PokemonUpdateOneRequiredWithoutPokemonMegaNestedInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  pokemonNumber?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMegaUpdatetypeInput, {
    nullable: true
  })
  type?: PokemonMegaUpdatetypeInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  typeSingle1?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  typeSingle2?: NullableStringFieldUpdateOperationsInput | undefined;
}

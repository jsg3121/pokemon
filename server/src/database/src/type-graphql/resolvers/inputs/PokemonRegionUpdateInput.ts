import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PokemonRegionUpdatetypeInput } from "../inputs/PokemonRegionUpdatetypeInput";
import { PokemonUpdateOneRequiredWithoutPokemonRegionNestedInput } from "../inputs/PokemonUpdateOneRequiredWithoutPokemonRegionNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PokemonRegionUpdateInput", {
  isAbstract: true
})
export class PokemonRegionUpdateInput {
  @TypeGraphQL.Field(_type => PokemonUpdateOneRequiredWithoutPokemonRegionNestedInput, {
    nullable: true
  })
  pokemon?: PokemonUpdateOneRequiredWithoutPokemonRegionNestedInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  pokemonNumber?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  region?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonRegionUpdatetypeInput, {
    nullable: true
  })
  type?: PokemonRegionUpdatetypeInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  typeSingle1?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  typeSingle2?: NullableStringFieldUpdateOperationsInput | undefined;
}

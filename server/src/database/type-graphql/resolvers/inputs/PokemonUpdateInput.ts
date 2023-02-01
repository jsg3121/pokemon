import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PokemonMegaUpdateManyWithoutPokemonNestedInput } from "../inputs/PokemonMegaUpdateManyWithoutPokemonNestedInput";
import { PokemonRegionUpdateManyWithoutPokemonNestedInput } from "../inputs/PokemonRegionUpdateManyWithoutPokemonNestedInput";
import { PokemonUpdateevolutionIdInput } from "../inputs/PokemonUpdateevolutionIdInput";
import { PokemonUpdatetypeInput } from "../inputs/PokemonUpdatetypeInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("PokemonUpdateInput", {
  isAbstract: true
})
export class PokemonUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  number?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpdatetypeInput, {
    nullable: true
  })
  type?: PokemonUpdatetypeInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isRegion?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isMega?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  typeSingle1?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  typeSingle2?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isEvolution?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpdateevolutionIdInput, {
    nullable: true
  })
  evolutionId?: PokemonUpdateevolutionIdInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  generation?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonRegionUpdateManyWithoutPokemonNestedInput, {
    nullable: true
  })
  PokemonRegion?: PokemonRegionUpdateManyWithoutPokemonNestedInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMegaUpdateManyWithoutPokemonNestedInput, {
    nullable: true
  })
  PokemonMega?: PokemonMegaUpdateManyWithoutPokemonNestedInput | undefined;
}

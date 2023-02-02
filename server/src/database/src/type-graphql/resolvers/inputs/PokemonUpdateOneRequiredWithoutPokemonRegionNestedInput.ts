import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateOrConnectWithoutPokemonRegionInput } from "../inputs/PokemonCreateOrConnectWithoutPokemonRegionInput";
import { PokemonCreateWithoutPokemonRegionInput } from "../inputs/PokemonCreateWithoutPokemonRegionInput";
import { PokemonUpdateWithoutPokemonRegionInput } from "../inputs/PokemonUpdateWithoutPokemonRegionInput";
import { PokemonUpsertWithoutPokemonRegionInput } from "../inputs/PokemonUpsertWithoutPokemonRegionInput";
import { PokemonWhereUniqueInput } from "../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.InputType("PokemonUpdateOneRequiredWithoutPokemonRegionNestedInput", {
  isAbstract: true
})
export class PokemonUpdateOneRequiredWithoutPokemonRegionNestedInput {
  @TypeGraphQL.Field(_type => PokemonCreateWithoutPokemonRegionInput, {
    nullable: true
  })
  create?: PokemonCreateWithoutPokemonRegionInput | undefined;

  @TypeGraphQL.Field(_type => PokemonCreateOrConnectWithoutPokemonRegionInput, {
    nullable: true
  })
  connectOrCreate?: PokemonCreateOrConnectWithoutPokemonRegionInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpsertWithoutPokemonRegionInput, {
    nullable: true
  })
  upsert?: PokemonUpsertWithoutPokemonRegionInput | undefined;

  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpdateWithoutPokemonRegionInput, {
    nullable: true
  })
  update?: PokemonUpdateWithoutPokemonRegionInput | undefined;
}

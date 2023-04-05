import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateOrConnectWithoutPokemonNormalFormInput } from "../inputs/PokemonCreateOrConnectWithoutPokemonNormalFormInput";
import { PokemonCreateWithoutPokemonNormalFormInput } from "../inputs/PokemonCreateWithoutPokemonNormalFormInput";
import { PokemonUpdateWithoutPokemonNormalFormInput } from "../inputs/PokemonUpdateWithoutPokemonNormalFormInput";
import { PokemonUpsertWithoutPokemonNormalFormInput } from "../inputs/PokemonUpsertWithoutPokemonNormalFormInput";
import { PokemonWhereUniqueInput } from "../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.InputType("PokemonUpdateOneRequiredWithoutPokemonNormalFormNestedInput", {
  isAbstract: true
})
export class PokemonUpdateOneRequiredWithoutPokemonNormalFormNestedInput {
  @TypeGraphQL.Field(_type => PokemonCreateWithoutPokemonNormalFormInput, {
    nullable: true
  })
  create?: PokemonCreateWithoutPokemonNormalFormInput | undefined;

  @TypeGraphQL.Field(_type => PokemonCreateOrConnectWithoutPokemonNormalFormInput, {
    nullable: true
  })
  connectOrCreate?: PokemonCreateOrConnectWithoutPokemonNormalFormInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpsertWithoutPokemonNormalFormInput, {
    nullable: true
  })
  upsert?: PokemonUpsertWithoutPokemonNormalFormInput | undefined;

  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpdateWithoutPokemonNormalFormInput, {
    nullable: true
  })
  update?: PokemonUpdateWithoutPokemonNormalFormInput | undefined;
}

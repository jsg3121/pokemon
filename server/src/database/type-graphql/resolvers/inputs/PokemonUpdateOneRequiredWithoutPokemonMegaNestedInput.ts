import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateOrConnectWithoutPokemonMegaInput } from "../inputs/PokemonCreateOrConnectWithoutPokemonMegaInput";
import { PokemonCreateWithoutPokemonMegaInput } from "../inputs/PokemonCreateWithoutPokemonMegaInput";
import { PokemonUpdateWithoutPokemonMegaInput } from "../inputs/PokemonUpdateWithoutPokemonMegaInput";
import { PokemonUpsertWithoutPokemonMegaInput } from "../inputs/PokemonUpsertWithoutPokemonMegaInput";
import { PokemonWhereUniqueInput } from "../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.InputType("PokemonUpdateOneRequiredWithoutPokemonMegaNestedInput", {
  isAbstract: true
})
export class PokemonUpdateOneRequiredWithoutPokemonMegaNestedInput {
  @TypeGraphQL.Field(_type => PokemonCreateWithoutPokemonMegaInput, {
    nullable: true
  })
  create?: PokemonCreateWithoutPokemonMegaInput | undefined;

  @TypeGraphQL.Field(_type => PokemonCreateOrConnectWithoutPokemonMegaInput, {
    nullable: true
  })
  connectOrCreate?: PokemonCreateOrConnectWithoutPokemonMegaInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpsertWithoutPokemonMegaInput, {
    nullable: true
  })
  upsert?: PokemonUpsertWithoutPokemonMegaInput | undefined;

  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokemonUpdateWithoutPokemonMegaInput, {
    nullable: true
  })
  update?: PokemonUpdateWithoutPokemonMegaInput | undefined;
}

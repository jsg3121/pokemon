import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateOrConnectWithoutPokemonMegaInput } from "../inputs/PokemonCreateOrConnectWithoutPokemonMegaInput";
import { PokemonCreateWithoutPokemonMegaInput } from "../inputs/PokemonCreateWithoutPokemonMegaInput";
import { PokemonWhereUniqueInput } from "../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.InputType("PokemonCreateNestedOneWithoutPokemonMegaInput", {
  isAbstract: true
})
export class PokemonCreateNestedOneWithoutPokemonMegaInput {
  @TypeGraphQL.Field(_type => PokemonCreateWithoutPokemonMegaInput, {
    nullable: true
  })
  create?: PokemonCreateWithoutPokemonMegaInput | undefined;

  @TypeGraphQL.Field(_type => PokemonCreateOrConnectWithoutPokemonMegaInput, {
    nullable: true
  })
  connectOrCreate?: PokemonCreateOrConnectWithoutPokemonMegaInput | undefined;

  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonWhereUniqueInput | undefined;
}

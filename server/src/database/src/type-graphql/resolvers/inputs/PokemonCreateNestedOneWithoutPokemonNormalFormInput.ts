import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonCreateOrConnectWithoutPokemonNormalFormInput } from "../inputs/PokemonCreateOrConnectWithoutPokemonNormalFormInput";
import { PokemonCreateWithoutPokemonNormalFormInput } from "../inputs/PokemonCreateWithoutPokemonNormalFormInput";
import { PokemonWhereUniqueInput } from "../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.InputType("PokemonCreateNestedOneWithoutPokemonNormalFormInput", {
  isAbstract: true
})
export class PokemonCreateNestedOneWithoutPokemonNormalFormInput {
  @TypeGraphQL.Field(_type => PokemonCreateWithoutPokemonNormalFormInput, {
    nullable: true
  })
  create?: PokemonCreateWithoutPokemonNormalFormInput | undefined;

  @TypeGraphQL.Field(_type => PokemonCreateOrConnectWithoutPokemonNormalFormInput, {
    nullable: true
  })
  connectOrCreate?: PokemonCreateOrConnectWithoutPokemonNormalFormInput | undefined;

  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonWhereUniqueInput | undefined;
}

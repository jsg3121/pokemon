import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMegaCreateManyPokemonInputEnvelope } from "../inputs/PokemonMegaCreateManyPokemonInputEnvelope";
import { PokemonMegaCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonMegaCreateOrConnectWithoutPokemonInput";
import { PokemonMegaCreateWithoutPokemonInput } from "../inputs/PokemonMegaCreateWithoutPokemonInput";
import { PokemonMegaWhereUniqueInput } from "../inputs/PokemonMegaWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMegaCreateNestedManyWithoutPokemonInput", {
  isAbstract: true
})
export class PokemonMegaCreateNestedManyWithoutPokemonInput {
  @TypeGraphQL.Field(_type => [PokemonMegaCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonMegaCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMegaCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonMegaCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonMegaCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonMegaCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonMegaWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonMegaWhereUniqueInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonNormalFormCreateManyPokemonInputEnvelope } from "../inputs/PokemonNormalFormCreateManyPokemonInputEnvelope";
import { PokemonNormalFormCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonNormalFormCreateOrConnectWithoutPokemonInput";
import { PokemonNormalFormCreateWithoutPokemonInput } from "../inputs/PokemonNormalFormCreateWithoutPokemonInput";
import { PokemonNormalFormWhereUniqueInput } from "../inputs/PokemonNormalFormWhereUniqueInput";

@TypeGraphQL.InputType("PokemonNormalFormCreateNestedManyWithoutPokemonInput", {
  isAbstract: true
})
export class PokemonNormalFormCreateNestedManyWithoutPokemonInput {
  @TypeGraphQL.Field(_type => [PokemonNormalFormCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonNormalFormCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonNormalFormCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonNormalFormCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonNormalFormCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonNormalFormCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonNormalFormWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonNormalFormWhereUniqueInput[] | undefined;
}

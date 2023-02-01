import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonRegionCreateManyPokemonInputEnvelope } from "../inputs/PokemonRegionCreateManyPokemonInputEnvelope";
import { PokemonRegionCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonRegionCreateOrConnectWithoutPokemonInput";
import { PokemonRegionCreateWithoutPokemonInput } from "../inputs/PokemonRegionCreateWithoutPokemonInput";
import { PokemonRegionWhereUniqueInput } from "../inputs/PokemonRegionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonRegionCreateNestedManyWithoutPokemonInput", {
  isAbstract: true
})
export class PokemonRegionCreateNestedManyWithoutPokemonInput {
  @TypeGraphQL.Field(_type => [PokemonRegionCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonRegionCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonRegionCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonRegionCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonRegionCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonRegionCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonRegionWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonRegionWhereUniqueInput[] | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonRegionCreateManyPokemonInputEnvelope } from "../inputs/PokemonRegionCreateManyPokemonInputEnvelope";
import { PokemonRegionCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonRegionCreateOrConnectWithoutPokemonInput";
import { PokemonRegionCreateWithoutPokemonInput } from "../inputs/PokemonRegionCreateWithoutPokemonInput";
import { PokemonRegionScalarWhereInput } from "../inputs/PokemonRegionScalarWhereInput";
import { PokemonRegionUpdateManyWithWhereWithoutPokemonInput } from "../inputs/PokemonRegionUpdateManyWithWhereWithoutPokemonInput";
import { PokemonRegionUpdateWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonRegionUpdateWithWhereUniqueWithoutPokemonInput";
import { PokemonRegionUpsertWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonRegionUpsertWithWhereUniqueWithoutPokemonInput";
import { PokemonRegionWhereUniqueInput } from "../inputs/PokemonRegionWhereUniqueInput";

@TypeGraphQL.InputType("PokemonRegionUpdateManyWithoutPokemonNestedInput", {
  isAbstract: true
})
export class PokemonRegionUpdateManyWithoutPokemonNestedInput {
  @TypeGraphQL.Field(_type => [PokemonRegionCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonRegionCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonRegionCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonRegionCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonRegionUpsertWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  upsert?: PokemonRegionUpsertWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonRegionCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonRegionCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonRegionWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonRegionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonRegionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonRegionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonRegionWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonRegionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonRegionWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonRegionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonRegionUpdateWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  update?: PokemonRegionUpdateWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonRegionUpdateManyWithWhereWithoutPokemonInput], {
    nullable: true
  })
  updateMany?: PokemonRegionUpdateManyWithWhereWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonRegionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonRegionScalarWhereInput[] | undefined;
}

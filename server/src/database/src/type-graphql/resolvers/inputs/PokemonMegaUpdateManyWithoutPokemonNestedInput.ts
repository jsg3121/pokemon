import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMegaCreateManyPokemonInputEnvelope } from "../inputs/PokemonMegaCreateManyPokemonInputEnvelope";
import { PokemonMegaCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonMegaCreateOrConnectWithoutPokemonInput";
import { PokemonMegaCreateWithoutPokemonInput } from "../inputs/PokemonMegaCreateWithoutPokemonInput";
import { PokemonMegaScalarWhereInput } from "../inputs/PokemonMegaScalarWhereInput";
import { PokemonMegaUpdateManyWithWhereWithoutPokemonInput } from "../inputs/PokemonMegaUpdateManyWithWhereWithoutPokemonInput";
import { PokemonMegaUpdateWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonMegaUpdateWithWhereUniqueWithoutPokemonInput";
import { PokemonMegaUpsertWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonMegaUpsertWithWhereUniqueWithoutPokemonInput";
import { PokemonMegaWhereUniqueInput } from "../inputs/PokemonMegaWhereUniqueInput";

@TypeGraphQL.InputType("PokemonMegaUpdateManyWithoutPokemonNestedInput", {
  isAbstract: true
})
export class PokemonMegaUpdateManyWithoutPokemonNestedInput {
  @TypeGraphQL.Field(_type => [PokemonMegaCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonMegaCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMegaCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonMegaCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMegaUpsertWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  upsert?: PokemonMegaUpsertWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonMegaCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonMegaCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonMegaWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonMegaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMegaWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonMegaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMegaWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonMegaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMegaWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonMegaWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMegaUpdateWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  update?: PokemonMegaUpdateWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMegaUpdateManyWithWhereWithoutPokemonInput], {
    nullable: true
  })
  updateMany?: PokemonMegaUpdateManyWithWhereWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMegaScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonMegaScalarWhereInput[] | undefined;
}

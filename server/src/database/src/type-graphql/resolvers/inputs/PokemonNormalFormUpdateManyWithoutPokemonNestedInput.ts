import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonNormalFormCreateManyPokemonInputEnvelope } from "../inputs/PokemonNormalFormCreateManyPokemonInputEnvelope";
import { PokemonNormalFormCreateOrConnectWithoutPokemonInput } from "../inputs/PokemonNormalFormCreateOrConnectWithoutPokemonInput";
import { PokemonNormalFormCreateWithoutPokemonInput } from "../inputs/PokemonNormalFormCreateWithoutPokemonInput";
import { PokemonNormalFormScalarWhereInput } from "../inputs/PokemonNormalFormScalarWhereInput";
import { PokemonNormalFormUpdateManyWithWhereWithoutPokemonInput } from "../inputs/PokemonNormalFormUpdateManyWithWhereWithoutPokemonInput";
import { PokemonNormalFormUpdateWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonNormalFormUpdateWithWhereUniqueWithoutPokemonInput";
import { PokemonNormalFormUpsertWithWhereUniqueWithoutPokemonInput } from "../inputs/PokemonNormalFormUpsertWithWhereUniqueWithoutPokemonInput";
import { PokemonNormalFormWhereUniqueInput } from "../inputs/PokemonNormalFormWhereUniqueInput";

@TypeGraphQL.InputType("PokemonNormalFormUpdateManyWithoutPokemonNestedInput", {
  isAbstract: true
})
export class PokemonNormalFormUpdateManyWithoutPokemonNestedInput {
  @TypeGraphQL.Field(_type => [PokemonNormalFormCreateWithoutPokemonInput], {
    nullable: true
  })
  create?: PokemonNormalFormCreateWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonNormalFormCreateOrConnectWithoutPokemonInput], {
    nullable: true
  })
  connectOrCreate?: PokemonNormalFormCreateOrConnectWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonNormalFormUpsertWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  upsert?: PokemonNormalFormUpsertWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonNormalFormCreateManyPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: PokemonNormalFormCreateManyPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PokemonNormalFormWhereUniqueInput], {
    nullable: true
  })
  set?: PokemonNormalFormWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonNormalFormWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PokemonNormalFormWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonNormalFormWhereUniqueInput], {
    nullable: true
  })
  delete?: PokemonNormalFormWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonNormalFormWhereUniqueInput], {
    nullable: true
  })
  connect?: PokemonNormalFormWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonNormalFormUpdateWithWhereUniqueWithoutPokemonInput], {
    nullable: true
  })
  update?: PokemonNormalFormUpdateWithWhereUniqueWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonNormalFormUpdateManyWithWhereWithoutPokemonInput], {
    nullable: true
  })
  updateMany?: PokemonNormalFormUpdateManyWithWhereWithoutPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonNormalFormScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PokemonNormalFormScalarWhereInput[] | undefined;
}

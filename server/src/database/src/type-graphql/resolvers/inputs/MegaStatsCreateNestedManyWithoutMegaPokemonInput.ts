import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MegaStatsCreateManyMegaPokemonInputEnvelope } from "../inputs/MegaStatsCreateManyMegaPokemonInputEnvelope";
import { MegaStatsCreateOrConnectWithoutMegaPokemonInput } from "../inputs/MegaStatsCreateOrConnectWithoutMegaPokemonInput";
import { MegaStatsCreateWithoutMegaPokemonInput } from "../inputs/MegaStatsCreateWithoutMegaPokemonInput";
import { MegaStatsWhereUniqueInput } from "../inputs/MegaStatsWhereUniqueInput";

@TypeGraphQL.InputType("MegaStatsCreateNestedManyWithoutMegaPokemonInput", {
  isAbstract: true
})
export class MegaStatsCreateNestedManyWithoutMegaPokemonInput {
  @TypeGraphQL.Field(_type => [MegaStatsCreateWithoutMegaPokemonInput], {
    nullable: true
  })
  create?: MegaStatsCreateWithoutMegaPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => [MegaStatsCreateOrConnectWithoutMegaPokemonInput], {
    nullable: true
  })
  connectOrCreate?: MegaStatsCreateOrConnectWithoutMegaPokemonInput[] | undefined;

  @TypeGraphQL.Field(_type => MegaStatsCreateManyMegaPokemonInputEnvelope, {
    nullable: true
  })
  createMany?: MegaStatsCreateManyMegaPokemonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MegaStatsWhereUniqueInput], {
    nullable: true
  })
  connect?: MegaStatsWhereUniqueInput[] | undefined;
}

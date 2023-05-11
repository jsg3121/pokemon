import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonNormalFormCreateOrConnectWithoutFormStatsInput } from "../inputs/PokemonNormalFormCreateOrConnectWithoutFormStatsInput";
import { PokemonNormalFormCreateWithoutFormStatsInput } from "../inputs/PokemonNormalFormCreateWithoutFormStatsInput";
import { PokemonNormalFormUpdateWithoutFormStatsInput } from "../inputs/PokemonNormalFormUpdateWithoutFormStatsInput";
import { PokemonNormalFormUpsertWithoutFormStatsInput } from "../inputs/PokemonNormalFormUpsertWithoutFormStatsInput";
import { PokemonNormalFormWhereUniqueInput } from "../inputs/PokemonNormalFormWhereUniqueInput";

@TypeGraphQL.InputType("PokemonNormalFormUpdateOneRequiredWithoutFormStatsNestedInput", {
  isAbstract: true
})
export class PokemonNormalFormUpdateOneRequiredWithoutFormStatsNestedInput {
  @TypeGraphQL.Field(_type => PokemonNormalFormCreateWithoutFormStatsInput, {
    nullable: true
  })
  create?: PokemonNormalFormCreateWithoutFormStatsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonNormalFormCreateOrConnectWithoutFormStatsInput, {
    nullable: true
  })
  connectOrCreate?: PokemonNormalFormCreateOrConnectWithoutFormStatsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonNormalFormUpsertWithoutFormStatsInput, {
    nullable: true
  })
  upsert?: PokemonNormalFormUpsertWithoutFormStatsInput | undefined;

  @TypeGraphQL.Field(_type => PokemonNormalFormWhereUniqueInput, {
    nullable: true
  })
  connect?: PokemonNormalFormWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PokemonNormalFormUpdateWithoutFormStatsInput, {
    nullable: true
  })
  update?: PokemonNormalFormUpdateWithoutFormStatsInput | undefined;
}

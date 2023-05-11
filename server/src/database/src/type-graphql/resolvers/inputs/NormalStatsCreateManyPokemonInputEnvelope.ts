import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NormalStatsCreateManyPokemonInput } from "../inputs/NormalStatsCreateManyPokemonInput";

@TypeGraphQL.InputType("NormalStatsCreateManyPokemonInputEnvelope", {
  isAbstract: true
})
export class NormalStatsCreateManyPokemonInputEnvelope {
  @TypeGraphQL.Field(_type => [NormalStatsCreateManyPokemonInput], {
    nullable: false
  })
  data!: NormalStatsCreateManyPokemonInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MegaStatsCreateManyMegaPokemonInput } from "../inputs/MegaStatsCreateManyMegaPokemonInput";

@TypeGraphQL.InputType("MegaStatsCreateManyMegaPokemonInputEnvelope", {
  isAbstract: true
})
export class MegaStatsCreateManyMegaPokemonInputEnvelope {
  @TypeGraphQL.Field(_type => [MegaStatsCreateManyMegaPokemonInput], {
    nullable: false
  })
  data!: MegaStatsCreateManyMegaPokemonInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

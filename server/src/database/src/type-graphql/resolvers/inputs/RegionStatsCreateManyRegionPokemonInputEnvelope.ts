import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionStatsCreateManyRegionPokemonInput } from "../inputs/RegionStatsCreateManyRegionPokemonInput";

@TypeGraphQL.InputType("RegionStatsCreateManyRegionPokemonInputEnvelope", {
  isAbstract: true
})
export class RegionStatsCreateManyRegionPokemonInputEnvelope {
  @TypeGraphQL.Field(_type => [RegionStatsCreateManyRegionPokemonInput], {
    nullable: false
  })
  data!: RegionStatsCreateManyRegionPokemonInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

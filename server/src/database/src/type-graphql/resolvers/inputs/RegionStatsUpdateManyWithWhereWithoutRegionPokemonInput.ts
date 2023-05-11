import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionStatsScalarWhereInput } from "../inputs/RegionStatsScalarWhereInput";
import { RegionStatsUpdateManyMutationInput } from "../inputs/RegionStatsUpdateManyMutationInput";

@TypeGraphQL.InputType("RegionStatsUpdateManyWithWhereWithoutRegionPokemonInput", {
  isAbstract: true
})
export class RegionStatsUpdateManyWithWhereWithoutRegionPokemonInput {
  @TypeGraphQL.Field(_type => RegionStatsScalarWhereInput, {
    nullable: false
  })
  where!: RegionStatsScalarWhereInput;

  @TypeGraphQL.Field(_type => RegionStatsUpdateManyMutationInput, {
    nullable: false
  })
  data!: RegionStatsUpdateManyMutationInput;
}

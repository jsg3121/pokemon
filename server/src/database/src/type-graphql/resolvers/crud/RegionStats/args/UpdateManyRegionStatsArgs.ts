import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RegionStatsUpdateManyMutationInput } from "../../../inputs/RegionStatsUpdateManyMutationInput";
import { RegionStatsWhereInput } from "../../../inputs/RegionStatsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRegionStatsArgs {
  @TypeGraphQL.Field(_type => RegionStatsUpdateManyMutationInput, {
    nullable: false
  })
  data!: RegionStatsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => RegionStatsWhereInput, {
    nullable: true
  })
  where?: RegionStatsWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RegionStatsWhereInput } from "../../../inputs/RegionStatsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyRegionStatsArgs {
  @TypeGraphQL.Field(_type => RegionStatsWhereInput, {
    nullable: true
  })
  where?: RegionStatsWhereInput | undefined;
}

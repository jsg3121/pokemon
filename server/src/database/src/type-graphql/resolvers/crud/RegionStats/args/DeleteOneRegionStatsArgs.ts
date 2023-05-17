import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RegionStatsWhereUniqueInput } from "../../../inputs/RegionStatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneRegionStatsArgs {
  @TypeGraphQL.Field(_type => RegionStatsWhereUniqueInput, {
    nullable: false
  })
  where!: RegionStatsWhereUniqueInput;
}

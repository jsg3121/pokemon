import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RegionStatsCreateInput } from "../../../inputs/RegionStatsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneRegionStatsArgs {
  @TypeGraphQL.Field(_type => RegionStatsCreateInput, {
    nullable: false
  })
  data!: RegionStatsCreateInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RegionStatsCreateManyInput } from "../../../inputs/RegionStatsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyRegionStatsArgs {
  @TypeGraphQL.Field(_type => [RegionStatsCreateManyInput], {
    nullable: false
  })
  data!: RegionStatsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

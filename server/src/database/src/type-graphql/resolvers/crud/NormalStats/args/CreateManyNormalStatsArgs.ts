import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NormalStatsCreateManyInput } from "../../../inputs/NormalStatsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyNormalStatsArgs {
  @TypeGraphQL.Field(_type => [NormalStatsCreateManyInput], {
    nullable: false
  })
  data!: NormalStatsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

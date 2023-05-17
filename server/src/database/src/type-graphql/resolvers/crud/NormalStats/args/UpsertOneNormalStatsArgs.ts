import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NormalStatsCreateInput } from "../../../inputs/NormalStatsCreateInput";
import { NormalStatsUpdateInput } from "../../../inputs/NormalStatsUpdateInput";
import { NormalStatsWhereUniqueInput } from "../../../inputs/NormalStatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneNormalStatsArgs {
  @TypeGraphQL.Field(_type => NormalStatsWhereUniqueInput, {
    nullable: false
  })
  where!: NormalStatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => NormalStatsCreateInput, {
    nullable: false
  })
  create!: NormalStatsCreateInput;

  @TypeGraphQL.Field(_type => NormalStatsUpdateInput, {
    nullable: false
  })
  update!: NormalStatsUpdateInput;
}

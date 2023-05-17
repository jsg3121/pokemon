import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MegaStatsCreateInput } from "../../../inputs/MegaStatsCreateInput";
import { MegaStatsUpdateInput } from "../../../inputs/MegaStatsUpdateInput";
import { MegaStatsWhereUniqueInput } from "../../../inputs/MegaStatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMegaStatsArgs {
  @TypeGraphQL.Field(_type => MegaStatsWhereUniqueInput, {
    nullable: false
  })
  where!: MegaStatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => MegaStatsCreateInput, {
    nullable: false
  })
  create!: MegaStatsCreateInput;

  @TypeGraphQL.Field(_type => MegaStatsUpdateInput, {
    nullable: false
  })
  update!: MegaStatsUpdateInput;
}

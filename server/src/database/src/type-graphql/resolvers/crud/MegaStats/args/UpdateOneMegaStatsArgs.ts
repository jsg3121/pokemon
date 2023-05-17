import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MegaStatsUpdateInput } from "../../../inputs/MegaStatsUpdateInput";
import { MegaStatsWhereUniqueInput } from "../../../inputs/MegaStatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMegaStatsArgs {
  @TypeGraphQL.Field(_type => MegaStatsUpdateInput, {
    nullable: false
  })
  data!: MegaStatsUpdateInput;

  @TypeGraphQL.Field(_type => MegaStatsWhereUniqueInput, {
    nullable: false
  })
  where!: MegaStatsWhereUniqueInput;
}

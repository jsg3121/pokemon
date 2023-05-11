import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MegaStatsCreateInput } from "../../../inputs/MegaStatsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMegaStatsArgs {
  @TypeGraphQL.Field(_type => MegaStatsCreateInput, {
    nullable: false
  })
  data!: MegaStatsCreateInput;
}

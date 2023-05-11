import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MegaStatsWhereUniqueInput } from "../../../inputs/MegaStatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMegaStatsArgs {
  @TypeGraphQL.Field(_type => MegaStatsWhereUniqueInput, {
    nullable: false
  })
  where!: MegaStatsWhereUniqueInput;
}

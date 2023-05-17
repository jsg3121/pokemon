import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NormalStatsWhereUniqueInput } from "../../../inputs/NormalStatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneNormalStatsArgs {
  @TypeGraphQL.Field(_type => NormalStatsWhereUniqueInput, {
    nullable: false
  })
  where!: NormalStatsWhereUniqueInput;
}

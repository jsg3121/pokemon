import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NormalStatsWhereInput } from "../../../inputs/NormalStatsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyNormalStatsArgs {
  @TypeGraphQL.Field(_type => NormalStatsWhereInput, {
    nullable: true
  })
  where?: NormalStatsWhereInput | undefined;
}

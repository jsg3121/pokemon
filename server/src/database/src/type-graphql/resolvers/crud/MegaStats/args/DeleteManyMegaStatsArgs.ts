import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MegaStatsWhereInput } from "../../../inputs/MegaStatsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMegaStatsArgs {
  @TypeGraphQL.Field(_type => MegaStatsWhereInput, {
    nullable: true
  })
  where?: MegaStatsWhereInput | undefined;
}

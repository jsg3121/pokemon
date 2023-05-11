import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FormStatsWhereInput } from "../../../inputs/FormStatsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyFormStatsArgs {
  @TypeGraphQL.Field(_type => FormStatsWhereInput, {
    nullable: true
  })
  where?: FormStatsWhereInput | undefined;
}

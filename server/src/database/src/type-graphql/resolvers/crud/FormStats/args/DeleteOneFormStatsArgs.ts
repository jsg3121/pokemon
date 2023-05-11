import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FormStatsWhereUniqueInput } from "../../../inputs/FormStatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneFormStatsArgs {
  @TypeGraphQL.Field(_type => FormStatsWhereUniqueInput, {
    nullable: false
  })
  where!: FormStatsWhereUniqueInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FormStatsCreateInput } from "../../../inputs/FormStatsCreateInput";
import { FormStatsUpdateInput } from "../../../inputs/FormStatsUpdateInput";
import { FormStatsWhereUniqueInput } from "../../../inputs/FormStatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneFormStatsArgs {
  @TypeGraphQL.Field(_type => FormStatsWhereUniqueInput, {
    nullable: false
  })
  where!: FormStatsWhereUniqueInput;

  @TypeGraphQL.Field(_type => FormStatsCreateInput, {
    nullable: false
  })
  create!: FormStatsCreateInput;

  @TypeGraphQL.Field(_type => FormStatsUpdateInput, {
    nullable: false
  })
  update!: FormStatsUpdateInput;
}

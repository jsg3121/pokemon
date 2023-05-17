import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FormStatsUpdateInput } from "../../../inputs/FormStatsUpdateInput";
import { FormStatsWhereUniqueInput } from "../../../inputs/FormStatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneFormStatsArgs {
  @TypeGraphQL.Field(_type => FormStatsUpdateInput, {
    nullable: false
  })
  data!: FormStatsUpdateInput;

  @TypeGraphQL.Field(_type => FormStatsWhereUniqueInput, {
    nullable: false
  })
  where!: FormStatsWhereUniqueInput;
}

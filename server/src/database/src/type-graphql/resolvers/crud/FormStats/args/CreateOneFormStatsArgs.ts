import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FormStatsCreateInput } from "../../../inputs/FormStatsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneFormStatsArgs {
  @TypeGraphQL.Field(_type => FormStatsCreateInput, {
    nullable: false
  })
  data!: FormStatsCreateInput;
}

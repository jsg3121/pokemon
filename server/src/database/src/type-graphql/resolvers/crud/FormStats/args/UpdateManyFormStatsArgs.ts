import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FormStatsUpdateManyMutationInput } from "../../../inputs/FormStatsUpdateManyMutationInput";
import { FormStatsWhereInput } from "../../../inputs/FormStatsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyFormStatsArgs {
  @TypeGraphQL.Field(_type => FormStatsUpdateManyMutationInput, {
    nullable: false
  })
  data!: FormStatsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => FormStatsWhereInput, {
    nullable: true
  })
  where?: FormStatsWhereInput | undefined;
}

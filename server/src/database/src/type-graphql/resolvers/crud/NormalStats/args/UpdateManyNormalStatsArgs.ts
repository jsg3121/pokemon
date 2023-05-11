import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NormalStatsUpdateManyMutationInput } from "../../../inputs/NormalStatsUpdateManyMutationInput";
import { NormalStatsWhereInput } from "../../../inputs/NormalStatsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyNormalStatsArgs {
  @TypeGraphQL.Field(_type => NormalStatsUpdateManyMutationInput, {
    nullable: false
  })
  data!: NormalStatsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => NormalStatsWhereInput, {
    nullable: true
  })
  where?: NormalStatsWhereInput | undefined;
}

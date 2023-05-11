import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MegaStatsUpdateManyMutationInput } from "../../../inputs/MegaStatsUpdateManyMutationInput";
import { MegaStatsWhereInput } from "../../../inputs/MegaStatsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMegaStatsArgs {
  @TypeGraphQL.Field(_type => MegaStatsUpdateManyMutationInput, {
    nullable: false
  })
  data!: MegaStatsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MegaStatsWhereInput, {
    nullable: true
  })
  where?: MegaStatsWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NormalStatsUpdateInput } from "../../../inputs/NormalStatsUpdateInput";
import { NormalStatsWhereUniqueInput } from "../../../inputs/NormalStatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneNormalStatsArgs {
  @TypeGraphQL.Field(_type => NormalStatsUpdateInput, {
    nullable: false
  })
  data!: NormalStatsUpdateInput;

  @TypeGraphQL.Field(_type => NormalStatsWhereUniqueInput, {
    nullable: false
  })
  where!: NormalStatsWhereUniqueInput;
}

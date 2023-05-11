import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NormalStatsOrderByWithRelationInput } from "../../../inputs/NormalStatsOrderByWithRelationInput";
import { NormalStatsWhereInput } from "../../../inputs/NormalStatsWhereInput";
import { NormalStatsWhereUniqueInput } from "../../../inputs/NormalStatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateNormalStatsArgs {
  @TypeGraphQL.Field(_type => NormalStatsWhereInput, {
    nullable: true
  })
  where?: NormalStatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [NormalStatsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: NormalStatsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => NormalStatsWhereUniqueInput, {
    nullable: true
  })
  cursor?: NormalStatsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

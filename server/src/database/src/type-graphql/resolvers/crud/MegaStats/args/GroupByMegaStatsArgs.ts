import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MegaStatsOrderByWithAggregationInput } from "../../../inputs/MegaStatsOrderByWithAggregationInput";
import { MegaStatsScalarWhereWithAggregatesInput } from "../../../inputs/MegaStatsScalarWhereWithAggregatesInput";
import { MegaStatsWhereInput } from "../../../inputs/MegaStatsWhereInput";
import { MegaStatsScalarFieldEnum } from "../../../../enums/MegaStatsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMegaStatsArgs {
  @TypeGraphQL.Field(_type => MegaStatsWhereInput, {
    nullable: true
  })
  where?: MegaStatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MegaStatsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MegaStatsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MegaStatsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "statCode" | "hp" | "attack" | "defense" | "specialAttack" | "specialDefense" | "speed" | "total">;

  @TypeGraphQL.Field(_type => MegaStatsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MegaStatsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

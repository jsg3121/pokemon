import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NormalStatsOrderByWithAggregationInput } from "../../../inputs/NormalStatsOrderByWithAggregationInput";
import { NormalStatsScalarWhereWithAggregatesInput } from "../../../inputs/NormalStatsScalarWhereWithAggregatesInput";
import { NormalStatsWhereInput } from "../../../inputs/NormalStatsWhereInput";
import { NormalStatsScalarFieldEnum } from "../../../../enums/NormalStatsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByNormalStatsArgs {
  @TypeGraphQL.Field(_type => NormalStatsWhereInput, {
    nullable: true
  })
  where?: NormalStatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [NormalStatsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: NormalStatsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [NormalStatsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "pokemonId" | "hp" | "attack" | "defense" | "specialAttack" | "specialDefense" | "speed" | "total">;

  @TypeGraphQL.Field(_type => NormalStatsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: NormalStatsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

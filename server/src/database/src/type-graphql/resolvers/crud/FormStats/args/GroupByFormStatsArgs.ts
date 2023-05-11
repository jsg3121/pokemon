import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FormStatsOrderByWithAggregationInput } from "../../../inputs/FormStatsOrderByWithAggregationInput";
import { FormStatsScalarWhereWithAggregatesInput } from "../../../inputs/FormStatsScalarWhereWithAggregatesInput";
import { FormStatsWhereInput } from "../../../inputs/FormStatsWhereInput";
import { FormStatsScalarFieldEnum } from "../../../../enums/FormStatsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByFormStatsArgs {
  @TypeGraphQL.Field(_type => FormStatsWhereInput, {
    nullable: true
  })
  where?: FormStatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FormStatsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: FormStatsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormStatsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "statCode" | "hp" | "attack" | "defense" | "specialAttack" | "specialDefense" | "speed" | "total">;

  @TypeGraphQL.Field(_type => FormStatsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: FormStatsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

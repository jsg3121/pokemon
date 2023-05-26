import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UseCountOrderByWithAggregationInput } from "../../../inputs/UseCountOrderByWithAggregationInput";
import { UseCountScalarWhereWithAggregatesInput } from "../../../inputs/UseCountScalarWhereWithAggregatesInput";
import { UseCountWhereInput } from "../../../inputs/UseCountWhereInput";
import { UseCountScalarFieldEnum } from "../../../../enums/UseCountScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUseCountArgs {
  @TypeGraphQL.Field(_type => UseCountWhereInput, {
    nullable: true
  })
  where?: UseCountWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UseCountOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UseCountOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UseCountScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "totalCount" | "todayCount">;

  @TypeGraphQL.Field(_type => UseCountScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UseCountScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

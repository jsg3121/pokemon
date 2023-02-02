import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeRelationOrderByWithAggregationInput } from "../../../inputs/TypeRelationOrderByWithAggregationInput";
import { TypeRelationScalarWhereWithAggregatesInput } from "../../../inputs/TypeRelationScalarWhereWithAggregatesInput";
import { TypeRelationWhereInput } from "../../../inputs/TypeRelationWhereInput";
import { TypeRelationScalarFieldEnum } from "../../../../enums/TypeRelationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTypeRelationArgs {
  @TypeGraphQL.Field(_type => TypeRelationWhereInput, {
    nullable: true
  })
  where?: TypeRelationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TypeRelationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TypeRelationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeRelationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "type" | "strong" | "weak" | "invalidity">;

  @TypeGraphQL.Field(_type => TypeRelationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TypeRelationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

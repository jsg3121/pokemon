import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("UseCountScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class UseCountScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UseCountScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UseCountScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UseCountScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UseCountScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UseCountScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UseCountScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  totalCount?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  todayCount?: IntWithAggregatesFilter | undefined;
}

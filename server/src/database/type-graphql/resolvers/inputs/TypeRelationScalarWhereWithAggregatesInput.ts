import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TypeRelationScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TypeRelationScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TypeRelationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TypeRelationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeRelationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TypeRelationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeRelationScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TypeRelationScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  type?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  strong?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  weak?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  invalidity?: StringNullableWithAggregatesFilter | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("FormStatsScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class FormStatsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [FormStatsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: FormStatsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormStatsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: FormStatsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormStatsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: FormStatsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  statCode?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  hp?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  attack?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  defense?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  specialAttack?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  specialDefense?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  speed?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  total?: IntWithAggregatesFilter | undefined;
}

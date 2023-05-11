import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("NormalStatsScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class NormalStatsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [NormalStatsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: NormalStatsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NormalStatsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: NormalStatsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [NormalStatsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: NormalStatsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  pokemonId?: IntWithAggregatesFilter | undefined;

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

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MegaStatsScalarWhereInput", {
  isAbstract: true
})
export class MegaStatsScalarWhereInput {
  @TypeGraphQL.Field(_type => [MegaStatsScalarWhereInput], {
    nullable: true
  })
  AND?: MegaStatsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MegaStatsScalarWhereInput], {
    nullable: true
  })
  OR?: MegaStatsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MegaStatsScalarWhereInput], {
    nullable: true
  })
  NOT?: MegaStatsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  statCode?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  hp?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  attack?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  defense?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  specialAttack?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  specialDefense?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  speed?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  total?: IntFilter | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("NormalStatsScalarWhereInput", {
  isAbstract: true
})
export class NormalStatsScalarWhereInput {
  @TypeGraphQL.Field(_type => [NormalStatsScalarWhereInput], {
    nullable: true
  })
  AND?: NormalStatsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NormalStatsScalarWhereInput], {
    nullable: true
  })
  OR?: NormalStatsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [NormalStatsScalarWhereInput], {
    nullable: true
  })
  NOT?: NormalStatsScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokemonId?: IntFilter | undefined;

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

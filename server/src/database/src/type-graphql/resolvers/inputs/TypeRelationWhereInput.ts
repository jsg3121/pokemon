import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("TypeRelationWhereInput", {
  isAbstract: true
})
export class TypeRelationWhereInput {
  @TypeGraphQL.Field(_type => [TypeRelationWhereInput], {
    nullable: true
  })
  AND?: TypeRelationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeRelationWhereInput], {
    nullable: true
  })
  OR?: TypeRelationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TypeRelationWhereInput], {
    nullable: true
  })
  NOT?: TypeRelationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  type?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  strong?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  weak?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  invalidity?: StringNullableFilter | undefined;
}

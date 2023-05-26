import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("UseCountWhereInput", {
  isAbstract: true
})
export class UseCountWhereInput {
  @TypeGraphQL.Field(_type => [UseCountWhereInput], {
    nullable: true
  })
  AND?: UseCountWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UseCountWhereInput], {
    nullable: true
  })
  OR?: UseCountWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UseCountWhereInput], {
    nullable: true
  })
  NOT?: UseCountWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  totalCount?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  todayCount?: IntFilter | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("TypeRelationUpdateInput", {
  isAbstract: true
})
export class TypeRelationUpdateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  strong?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  weak?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  invalidity?: string | undefined;
}

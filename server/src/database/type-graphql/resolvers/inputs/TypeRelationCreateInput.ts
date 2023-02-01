import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("TypeRelationCreateInput", {
  isAbstract: true
})
export class TypeRelationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

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

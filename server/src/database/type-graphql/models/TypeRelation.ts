import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("TypeRelation", {
  isAbstract: true
})
export class TypeRelation {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  strong?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  weak?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  invalidity?: string | null;
}

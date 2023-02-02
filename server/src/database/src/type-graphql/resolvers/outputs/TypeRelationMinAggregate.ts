import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("TypeRelationMinAggregate", {
  isAbstract: true
})
export class TypeRelationMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  strong!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  weak!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  invalidity!: string | null;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeRelationCreateManyInput } from "../../../inputs/TypeRelationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTypeRelationArgs {
  @TypeGraphQL.Field(_type => [TypeRelationCreateManyInput], {
    nullable: false
  })
  data!: TypeRelationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

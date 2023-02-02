import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeRelationWhereInput } from "../../../inputs/TypeRelationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTypeRelationArgs {
  @TypeGraphQL.Field(_type => TypeRelationWhereInput, {
    nullable: true
  })
  where?: TypeRelationWhereInput | undefined;
}

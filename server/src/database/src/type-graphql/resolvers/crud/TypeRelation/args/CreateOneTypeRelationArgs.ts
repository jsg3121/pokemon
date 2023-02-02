import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeRelationCreateInput } from "../../../inputs/TypeRelationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTypeRelationArgs {
  @TypeGraphQL.Field(_type => TypeRelationCreateInput, {
    nullable: false
  })
  data!: TypeRelationCreateInput;
}

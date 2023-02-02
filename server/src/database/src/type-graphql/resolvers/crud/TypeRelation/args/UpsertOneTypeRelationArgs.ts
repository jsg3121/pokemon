import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeRelationCreateInput } from "../../../inputs/TypeRelationCreateInput";
import { TypeRelationUpdateInput } from "../../../inputs/TypeRelationUpdateInput";
import { TypeRelationWhereUniqueInput } from "../../../inputs/TypeRelationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTypeRelationArgs {
  @TypeGraphQL.Field(_type => TypeRelationWhereUniqueInput, {
    nullable: false
  })
  where!: TypeRelationWhereUniqueInput;

  @TypeGraphQL.Field(_type => TypeRelationCreateInput, {
    nullable: false
  })
  create!: TypeRelationCreateInput;

  @TypeGraphQL.Field(_type => TypeRelationUpdateInput, {
    nullable: false
  })
  update!: TypeRelationUpdateInput;
}

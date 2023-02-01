import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeRelationUpdateInput } from "../../../inputs/TypeRelationUpdateInput";
import { TypeRelationWhereUniqueInput } from "../../../inputs/TypeRelationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTypeRelationArgs {
  @TypeGraphQL.Field(_type => TypeRelationUpdateInput, {
    nullable: false
  })
  data!: TypeRelationUpdateInput;

  @TypeGraphQL.Field(_type => TypeRelationWhereUniqueInput, {
    nullable: false
  })
  where!: TypeRelationWhereUniqueInput;
}

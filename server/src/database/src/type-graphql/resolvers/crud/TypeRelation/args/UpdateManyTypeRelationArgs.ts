import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TypeRelationUpdateManyMutationInput } from "../../../inputs/TypeRelationUpdateManyMutationInput";
import { TypeRelationWhereInput } from "../../../inputs/TypeRelationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTypeRelationArgs {
  @TypeGraphQL.Field(_type => TypeRelationUpdateManyMutationInput, {
    nullable: false
  })
  data!: TypeRelationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TypeRelationWhereInput, {
    nullable: true
  })
  where?: TypeRelationWhereInput | undefined;
}

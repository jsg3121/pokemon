import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UseCountCreateInput } from "../../../inputs/UseCountCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneUseCountArgs {
  @TypeGraphQL.Field(_type => UseCountCreateInput, {
    nullable: false
  })
  data!: UseCountCreateInput;
}

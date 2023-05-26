import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UseCountWhereInput } from "../../../inputs/UseCountWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUseCountArgs {
  @TypeGraphQL.Field(_type => UseCountWhereInput, {
    nullable: true
  })
  where?: UseCountWhereInput | undefined;
}

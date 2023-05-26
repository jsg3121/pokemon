import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UseCountUpdateInput } from "../../../inputs/UseCountUpdateInput";
import { UseCountWhereUniqueInput } from "../../../inputs/UseCountWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneUseCountArgs {
  @TypeGraphQL.Field(_type => UseCountUpdateInput, {
    nullable: false
  })
  data!: UseCountUpdateInput;

  @TypeGraphQL.Field(_type => UseCountWhereUniqueInput, {
    nullable: false
  })
  where!: UseCountWhereUniqueInput;
}

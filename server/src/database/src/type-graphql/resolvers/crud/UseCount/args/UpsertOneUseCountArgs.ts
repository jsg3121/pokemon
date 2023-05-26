import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UseCountCreateInput } from "../../../inputs/UseCountCreateInput";
import { UseCountUpdateInput } from "../../../inputs/UseCountUpdateInput";
import { UseCountWhereUniqueInput } from "../../../inputs/UseCountWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneUseCountArgs {
  @TypeGraphQL.Field(_type => UseCountWhereUniqueInput, {
    nullable: false
  })
  where!: UseCountWhereUniqueInput;

  @TypeGraphQL.Field(_type => UseCountCreateInput, {
    nullable: false
  })
  create!: UseCountCreateInput;

  @TypeGraphQL.Field(_type => UseCountUpdateInput, {
    nullable: false
  })
  update!: UseCountUpdateInput;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UseCountUpdateManyMutationInput } from "../../../inputs/UseCountUpdateManyMutationInput";
import { UseCountWhereInput } from "../../../inputs/UseCountWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUseCountArgs {
  @TypeGraphQL.Field(_type => UseCountUpdateManyMutationInput, {
    nullable: false
  })
  data!: UseCountUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => UseCountWhereInput, {
    nullable: true
  })
  where?: UseCountWhereInput | undefined;
}

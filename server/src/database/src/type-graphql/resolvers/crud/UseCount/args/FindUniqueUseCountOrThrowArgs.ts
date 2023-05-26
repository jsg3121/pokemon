import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UseCountWhereUniqueInput } from "../../../inputs/UseCountWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueUseCountOrThrowArgs {
  @TypeGraphQL.Field(_type => UseCountWhereUniqueInput, {
    nullable: false
  })
  where!: UseCountWhereUniqueInput;
}

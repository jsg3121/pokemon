import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UseCountCreateManyInput } from "../../../inputs/UseCountCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyUseCountArgs {
  @TypeGraphQL.Field(_type => [UseCountCreateManyInput], {
    nullable: false
  })
  data!: UseCountCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

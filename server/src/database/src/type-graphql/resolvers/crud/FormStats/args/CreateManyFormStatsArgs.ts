import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FormStatsCreateManyInput } from "../../../inputs/FormStatsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyFormStatsArgs {
  @TypeGraphQL.Field(_type => [FormStatsCreateManyInput], {
    nullable: false
  })
  data!: FormStatsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

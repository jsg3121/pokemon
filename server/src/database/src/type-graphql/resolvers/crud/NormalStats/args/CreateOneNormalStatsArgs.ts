import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NormalStatsCreateInput } from "../../../inputs/NormalStatsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneNormalStatsArgs {
  @TypeGraphQL.Field(_type => NormalStatsCreateInput, {
    nullable: false
  })
  data!: NormalStatsCreateInput;
}

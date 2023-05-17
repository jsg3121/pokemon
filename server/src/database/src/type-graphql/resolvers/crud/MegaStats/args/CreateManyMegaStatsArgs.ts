import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MegaStatsCreateManyInput } from "../../../inputs/MegaStatsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMegaStatsArgs {
  @TypeGraphQL.Field(_type => [MegaStatsCreateManyInput], {
    nullable: false
  })
  data!: MegaStatsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

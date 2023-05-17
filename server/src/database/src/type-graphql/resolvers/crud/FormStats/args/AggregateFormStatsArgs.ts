import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FormStatsOrderByWithRelationInput } from "../../../inputs/FormStatsOrderByWithRelationInput";
import { FormStatsWhereInput } from "../../../inputs/FormStatsWhereInput";
import { FormStatsWhereUniqueInput } from "../../../inputs/FormStatsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateFormStatsArgs {
  @TypeGraphQL.Field(_type => FormStatsWhereInput, {
    nullable: true
  })
  where?: FormStatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [FormStatsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: FormStatsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => FormStatsWhereUniqueInput, {
    nullable: true
  })
  cursor?: FormStatsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UseCountOrderByWithRelationInput } from "../../../inputs/UseCountOrderByWithRelationInput";
import { UseCountWhereInput } from "../../../inputs/UseCountWhereInput";
import { UseCountWhereUniqueInput } from "../../../inputs/UseCountWhereUniqueInput";
import { UseCountScalarFieldEnum } from "../../../../enums/UseCountScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstUseCountArgs {
  @TypeGraphQL.Field(_type => UseCountWhereInput, {
    nullable: true
  })
  where?: UseCountWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UseCountOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: UseCountOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => UseCountWhereUniqueInput, {
    nullable: true
  })
  cursor?: UseCountWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [UseCountScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "totalCount" | "todayCount"> | undefined;
}

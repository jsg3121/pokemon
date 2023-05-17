import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { FormStatsOrderByWithRelationInput } from "../../../inputs/FormStatsOrderByWithRelationInput";
import { FormStatsWhereInput } from "../../../inputs/FormStatsWhereInput";
import { FormStatsWhereUniqueInput } from "../../../inputs/FormStatsWhereUniqueInput";
import { FormStatsScalarFieldEnum } from "../../../../enums/FormStatsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstFormStatsOrThrowArgs {
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

  @TypeGraphQL.Field(_type => [FormStatsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "statCode" | "hp" | "attack" | "defense" | "specialAttack" | "specialDefense" | "speed" | "total"> | undefined;
}

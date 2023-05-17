import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NormalStatsOrderByWithRelationInput } from "../../../inputs/NormalStatsOrderByWithRelationInput";
import { NormalStatsWhereInput } from "../../../inputs/NormalStatsWhereInput";
import { NormalStatsWhereUniqueInput } from "../../../inputs/NormalStatsWhereUniqueInput";
import { NormalStatsScalarFieldEnum } from "../../../../enums/NormalStatsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstNormalStatsArgs {
  @TypeGraphQL.Field(_type => NormalStatsWhereInput, {
    nullable: true
  })
  where?: NormalStatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [NormalStatsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: NormalStatsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => NormalStatsWhereUniqueInput, {
    nullable: true
  })
  cursor?: NormalStatsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [NormalStatsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "pokemonId" | "hp" | "attack" | "defense" | "specialAttack" | "specialDefense" | "speed" | "total"> | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RegionStatsOrderByWithRelationInput } from "../../../inputs/RegionStatsOrderByWithRelationInput";
import { RegionStatsWhereInput } from "../../../inputs/RegionStatsWhereInput";
import { RegionStatsWhereUniqueInput } from "../../../inputs/RegionStatsWhereUniqueInput";
import { RegionStatsScalarFieldEnum } from "../../../../enums/RegionStatsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class PokemonRegionRegionStatsArgs {
  @TypeGraphQL.Field(_type => RegionStatsWhereInput, {
    nullable: true
  })
  where?: RegionStatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RegionStatsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: RegionStatsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => RegionStatsWhereUniqueInput, {
    nullable: true
  })
  cursor?: RegionStatsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [RegionStatsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "statCode" | "hp" | "attack" | "defense" | "specialAttack" | "specialDefense" | "speed" | "total"> | undefined;
}

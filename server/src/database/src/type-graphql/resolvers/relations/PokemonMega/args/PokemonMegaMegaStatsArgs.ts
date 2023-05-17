import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MegaStatsOrderByWithRelationInput } from "../../../inputs/MegaStatsOrderByWithRelationInput";
import { MegaStatsWhereInput } from "../../../inputs/MegaStatsWhereInput";
import { MegaStatsWhereUniqueInput } from "../../../inputs/MegaStatsWhereUniqueInput";
import { MegaStatsScalarFieldEnum } from "../../../../enums/MegaStatsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class PokemonMegaMegaStatsArgs {
  @TypeGraphQL.Field(_type => MegaStatsWhereInput, {
    nullable: true
  })
  where?: MegaStatsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MegaStatsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MegaStatsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MegaStatsWhereUniqueInput, {
    nullable: true
  })
  cursor?: MegaStatsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MegaStatsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "statCode" | "hp" | "attack" | "defense" | "specialAttack" | "specialDefense" | "speed" | "total"> | undefined;
}

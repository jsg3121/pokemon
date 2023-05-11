import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonMegaRelationFilter } from "../inputs/PokemonMegaRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MegaStatsWhereInput", {
  isAbstract: true
})
export class MegaStatsWhereInput {
  @TypeGraphQL.Field(_type => [MegaStatsWhereInput], {
    nullable: true
  })
  AND?: MegaStatsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MegaStatsWhereInput], {
    nullable: true
  })
  OR?: MegaStatsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MegaStatsWhereInput], {
    nullable: true
  })
  NOT?: MegaStatsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonMegaRelationFilter, {
    nullable: true
  })
  megaPokemon?: PokemonMegaRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  statCode?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  hp?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  attack?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  defense?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  specialAttack?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  specialDefense?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  speed?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  total?: IntFilter | undefined;
}

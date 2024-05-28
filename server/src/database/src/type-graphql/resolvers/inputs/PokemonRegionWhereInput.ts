import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableListFilter } from "../inputs/IntNullableListFilter";
import { PokemonAbilityListListRelationFilter } from "../inputs/PokemonAbilityListListRelationFilter";
import { PokemonRelationFilter } from "../inputs/PokemonRelationFilter";
import { RegionStatsListRelationFilter } from "../inputs/RegionStatsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";

@TypeGraphQL.InputType("PokemonRegionWhereInput", {
  isAbstract: true
})
export class PokemonRegionWhereInput {
  @TypeGraphQL.Field(_type => [PokemonRegionWhereInput], {
    nullable: true
  })
  AND?: PokemonRegionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonRegionWhereInput], {
    nullable: true
  })
  OR?: PokemonRegionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonRegionWhereInput], {
    nullable: true
  })
  NOT?: PokemonRegionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokemonId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokemonNumber?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  region?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  type?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  typeSingle1?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  typeSingle2?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  statCode?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableListFilter, {
    nullable: true
  })
  abilityId?: IntNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonRelationFilter, {
    nullable: true
  })
  pokemon?: PokemonRelationFilter | undefined;

  @TypeGraphQL.Field(_type => RegionStatsListRelationFilter, {
    nullable: true
  })
  RegionStats?: RegionStatsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilityListListRelationFilter, {
    nullable: true
  })
  PokemonAbilityList?: PokemonAbilityListListRelationFilter | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableListFilter } from "../inputs/IntNullableListFilter";
import { PokemonMegaListRelationFilter } from "../inputs/PokemonMegaListRelationFilter";
import { PokemonRegionListRelationFilter } from "../inputs/PokemonRegionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";

@TypeGraphQL.InputType("PokemonWhereInput", {
  isAbstract: true
})
export class PokemonWhereInput {
  @TypeGraphQL.Field(_type => [PokemonWhereInput], {
    nullable: true
  })
  AND?: PokemonWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonWhereInput], {
    nullable: true
  })
  OR?: PokemonWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonWhereInput], {
    nullable: true
  })
  NOT?: PokemonWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  number?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableListFilter, {
    nullable: true
  })
  type?: StringNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  isRegion?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  isMega?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  typeSingle1?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  typeSingle2?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isEvolution?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableListFilter, {
    nullable: true
  })
  evolutionId?: IntNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  generation?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonRegionListRelationFilter, {
    nullable: true
  })
  PokemonRegion?: PokemonRegionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonMegaListRelationFilter, {
    nullable: true
  })
  PokemonMega?: PokemonMegaListRelationFilter | undefined;
}

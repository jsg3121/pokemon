import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FormStatsListRelationFilter } from "../inputs/FormStatsListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableListFilter } from "../inputs/IntNullableListFilter";
import { PokemonAbilityListListRelationFilter } from "../inputs/PokemonAbilityListListRelationFilter";
import { PokemonRelationFilter } from "../inputs/PokemonRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";

@TypeGraphQL.InputType("PokemonNormalFormWhereInput", {
  isAbstract: true
})
export class PokemonNormalFormWhereInput {
  @TypeGraphQL.Field(_type => [PokemonNormalFormWhereInput], {
    nullable: true
  })
  AND?: PokemonNormalFormWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonNormalFormWhereInput], {
    nullable: true
  })
  OR?: PokemonNormalFormWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonNormalFormWhereInput], {
    nullable: true
  })
  NOT?: PokemonNormalFormWhereInput[] | undefined;

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
  imagePath?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  statCode?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableListFilter, {
    nullable: true
  })
  abilityId?: IntNullableListFilter | undefined;

  @TypeGraphQL.Field(_type => FormStatsListRelationFilter, {
    nullable: true
  })
  FormStats?: FormStatsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonRelationFilter, {
    nullable: true
  })
  pokemon?: PokemonRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonAbilityListListRelationFilter, {
    nullable: true
  })
  PokemonAbilityList?: PokemonAbilityListListRelationFilter | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonNormalFormRelationFilter } from "../inputs/PokemonNormalFormRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("FormStatsWhereInput", {
  isAbstract: true
})
export class FormStatsWhereInput {
  @TypeGraphQL.Field(_type => [FormStatsWhereInput], {
    nullable: true
  })
  AND?: FormStatsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormStatsWhereInput], {
    nullable: true
  })
  OR?: FormStatsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [FormStatsWhereInput], {
    nullable: true
  })
  NOT?: FormStatsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonNormalFormRelationFilter, {
    nullable: true
  })
  normalFormPokemon?: PokemonNormalFormRelationFilter | undefined;

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

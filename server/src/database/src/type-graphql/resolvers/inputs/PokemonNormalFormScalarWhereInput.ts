import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";

@TypeGraphQL.InputType("PokemonNormalFormScalarWhereInput", {
  isAbstract: true
})
export class PokemonNormalFormScalarWhereInput {
  @TypeGraphQL.Field(_type => [PokemonNormalFormScalarWhereInput], {
    nullable: true
  })
  AND?: PokemonNormalFormScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonNormalFormScalarWhereInput], {
    nullable: true
  })
  OR?: PokemonNormalFormScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonNormalFormScalarWhereInput], {
    nullable: true
  })
  NOT?: PokemonNormalFormScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokemonId?: IntFilter | undefined;

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
}

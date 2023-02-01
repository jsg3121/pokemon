import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";

@TypeGraphQL.InputType("PokemonMegaScalarWhereInput", {
  isAbstract: true
})
export class PokemonMegaScalarWhereInput {
  @TypeGraphQL.Field(_type => [PokemonMegaScalarWhereInput], {
    nullable: true
  })
  AND?: PokemonMegaScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMegaScalarWhereInput], {
    nullable: true
  })
  OR?: PokemonMegaScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMegaScalarWhereInput], {
    nullable: true
  })
  NOT?: PokemonMegaScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokemonId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  pokemonNumber?: IntFilter | undefined;

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
}

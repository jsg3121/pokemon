import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PokemonRelationFilter } from "../inputs/PokemonRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";

@TypeGraphQL.InputType("PokemonMegaWhereInput", {
  isAbstract: true
})
export class PokemonMegaWhereInput {
  @TypeGraphQL.Field(_type => [PokemonMegaWhereInput], {
    nullable: true
  })
  AND?: PokemonMegaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMegaWhereInput], {
    nullable: true
  })
  OR?: PokemonMegaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PokemonMegaWhereInput], {
    nullable: true
  })
  NOT?: PokemonMegaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PokemonRelationFilter, {
    nullable: true
  })
  pokemon?: PokemonRelationFilter | undefined;

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

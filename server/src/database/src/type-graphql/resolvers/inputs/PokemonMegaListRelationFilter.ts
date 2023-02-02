import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMegaWhereInput } from "../inputs/PokemonMegaWhereInput";

@TypeGraphQL.InputType("PokemonMegaListRelationFilter", {
  isAbstract: true
})
export class PokemonMegaListRelationFilter {
  @TypeGraphQL.Field(_type => PokemonMegaWhereInput, {
    nullable: true
  })
  every?: PokemonMegaWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMegaWhereInput, {
    nullable: true
  })
  some?: PokemonMegaWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMegaWhereInput, {
    nullable: true
  })
  none?: PokemonMegaWhereInput | undefined;
}

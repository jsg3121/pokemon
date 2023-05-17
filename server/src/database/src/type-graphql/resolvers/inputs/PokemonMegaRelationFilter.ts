import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMegaWhereInput } from "../inputs/PokemonMegaWhereInput";

@TypeGraphQL.InputType("PokemonMegaRelationFilter", {
  isAbstract: true
})
export class PokemonMegaRelationFilter {
  @TypeGraphQL.Field(_type => PokemonMegaWhereInput, {
    nullable: true
  })
  is?: PokemonMegaWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonMegaWhereInput, {
    nullable: true
  })
  isNot?: PokemonMegaWhereInput | undefined;
}

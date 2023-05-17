import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonNormalFormWhereInput } from "../inputs/PokemonNormalFormWhereInput";

@TypeGraphQL.InputType("PokemonNormalFormRelationFilter", {
  isAbstract: true
})
export class PokemonNormalFormRelationFilter {
  @TypeGraphQL.Field(_type => PokemonNormalFormWhereInput, {
    nullable: true
  })
  is?: PokemonNormalFormWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonNormalFormWhereInput, {
    nullable: true
  })
  isNot?: PokemonNormalFormWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonRegionWhereInput } from "../inputs/PokemonRegionWhereInput";

@TypeGraphQL.InputType("PokemonRegionRelationFilter", {
  isAbstract: true
})
export class PokemonRegionRelationFilter {
  @TypeGraphQL.Field(_type => PokemonRegionWhereInput, {
    nullable: true
  })
  is?: PokemonRegionWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonRegionWhereInput, {
    nullable: true
  })
  isNot?: PokemonRegionWhereInput | undefined;
}

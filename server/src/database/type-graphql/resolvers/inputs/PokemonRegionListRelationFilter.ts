import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonRegionWhereInput } from "../inputs/PokemonRegionWhereInput";

@TypeGraphQL.InputType("PokemonRegionListRelationFilter", {
  isAbstract: true
})
export class PokemonRegionListRelationFilter {
  @TypeGraphQL.Field(_type => PokemonRegionWhereInput, {
    nullable: true
  })
  every?: PokemonRegionWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonRegionWhereInput, {
    nullable: true
  })
  some?: PokemonRegionWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonRegionWhereInput, {
    nullable: true
  })
  none?: PokemonRegionWhereInput | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonNormalFormWhereInput } from "../inputs/PokemonNormalFormWhereInput";

@TypeGraphQL.InputType("PokemonNormalFormListRelationFilter", {
  isAbstract: true
})
export class PokemonNormalFormListRelationFilter {
  @TypeGraphQL.Field(_type => PokemonNormalFormWhereInput, {
    nullable: true
  })
  every?: PokemonNormalFormWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonNormalFormWhereInput, {
    nullable: true
  })
  some?: PokemonNormalFormWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonNormalFormWhereInput, {
    nullable: true
  })
  none?: PokemonNormalFormWhereInput | undefined;
}

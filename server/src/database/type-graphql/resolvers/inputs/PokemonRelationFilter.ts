import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonWhereInput } from "../inputs/PokemonWhereInput";

@TypeGraphQL.InputType("PokemonRelationFilter", {
  isAbstract: true
})
export class PokemonRelationFilter {
  @TypeGraphQL.Field(_type => PokemonWhereInput, {
    nullable: true
  })
  is?: PokemonWhereInput | undefined;

  @TypeGraphQL.Field(_type => PokemonWhereInput, {
    nullable: true
  })
  isNot?: PokemonWhereInput | undefined;
}

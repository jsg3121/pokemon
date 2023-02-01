import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("PokemonCreateevolutionIdInput", {
  isAbstract: true
})
export class PokemonCreateevolutionIdInput {
  @TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
    nullable: false
  })
  set!: number[];
}

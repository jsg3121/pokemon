import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("PokemonMegaMinAggregate", {
  isAbstract: true
})
export class PokemonMegaMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  pokemonId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  pokemonNumber!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  typeSingle1!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  typeSingle2!: string | null;
}

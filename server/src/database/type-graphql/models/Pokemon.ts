import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { PokemonMega } from "../models/PokemonMega";
import { PokemonRegion } from "../models/PokemonRegion";
import { PokemonCount } from "../resolvers/outputs/PokemonCount";

@TypeGraphQL.ObjectType("Pokemon", {
  isAbstract: true
})
export class Pokemon {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  number!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  type!: string[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isRegion?: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isMega?: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  typeSingle1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  typeSingle2?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isEvolution!: boolean;

  @TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
    nullable: false
  })
  evolutionId!: number[];

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  generation!: number;

  PokemonRegion?: PokemonRegion[];

  PokemonMega?: PokemonMega[];

  @TypeGraphQL.Field(_type => PokemonCount, {
    nullable: true
  })
  _count?: PokemonCount | null;
}

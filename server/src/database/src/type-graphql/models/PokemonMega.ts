import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { MegaStats } from "../models/MegaStats";
import { Pokemon } from "../models/Pokemon";
import { PokemonMegaCount } from "../resolvers/outputs/PokemonMegaCount";

@TypeGraphQL.ObjectType("PokemonMega", {
  isAbstract: true,
  simpleResolvers: true
})
export class PokemonMega {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokemonId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokemonNumber!: number;

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  type!: string[];

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  typeSingle1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  typeSingle2?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  statCode!: string;

  @TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
    nullable: false
  })
  abilityId!: number[];

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  MegaStats?: MegaStats[];

  pokemon?: Pokemon;

  @TypeGraphQL.Field(_type => PokemonMegaCount, {
    nullable: true
  })
  _count?: PokemonMegaCount | null;
}

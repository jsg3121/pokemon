import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Pokemon } from "../models/Pokemon";
import { PokemonRegionFormAbilityList } from "../models/PokemonRegionFormAbilityList";
import { RegionStats } from "../models/RegionStats";
import { PokemonRegionCount } from "../resolvers/outputs/PokemonRegionCount";

@TypeGraphQL.ObjectType("PokemonRegion", {
  isAbstract: true,
  simpleResolvers: true
})
export class PokemonRegion {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokemonId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokemonNumber!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  region!: string;

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

  pokemon?: Pokemon;

  RegionStats?: RegionStats[];

  PokemonRegionFormAbilityList?: PokemonRegionFormAbilityList[];

  @TypeGraphQL.Field(_type => PokemonRegionCount, {
    nullable: true
  })
  _count?: PokemonRegionCount | null;
}

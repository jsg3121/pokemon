import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonRegionAvgAggregate } from "../outputs/PokemonRegionAvgAggregate";
import { PokemonRegionCountAggregate } from "../outputs/PokemonRegionCountAggregate";
import { PokemonRegionMaxAggregate } from "../outputs/PokemonRegionMaxAggregate";
import { PokemonRegionMinAggregate } from "../outputs/PokemonRegionMinAggregate";
import { PokemonRegionSumAggregate } from "../outputs/PokemonRegionSumAggregate";

@TypeGraphQL.ObjectType("PokemonRegionGroupBy", {
  isAbstract: true
})
export class PokemonRegionGroupBy {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  region!: string;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  type!: string[] | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  typeSingle1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  typeSingle2!: string | null;

  @TypeGraphQL.Field(_type => PokemonRegionCountAggregate, {
    nullable: true
  })
  _count!: PokemonRegionCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonRegionAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonRegionAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonRegionSumAggregate, {
    nullable: true
  })
  _sum!: PokemonRegionSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonRegionMinAggregate, {
    nullable: true
  })
  _min!: PokemonRegionMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonRegionMaxAggregate, {
    nullable: true
  })
  _max!: PokemonRegionMaxAggregate | null;
}

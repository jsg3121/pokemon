import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAvgAggregate } from "../outputs/PokemonAvgAggregate";
import { PokemonCountAggregate } from "../outputs/PokemonCountAggregate";
import { PokemonMaxAggregate } from "../outputs/PokemonMaxAggregate";
import { PokemonMinAggregate } from "../outputs/PokemonMinAggregate";
import { PokemonSumAggregate } from "../outputs/PokemonSumAggregate";

@TypeGraphQL.ObjectType("PokemonGroupBy", {
  isAbstract: true
})
export class PokemonGroupBy {
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
    nullable: true
  })
  type!: string[] | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isRegion!: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isMega!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  typeSingle1!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  typeSingle2!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isEvolution!: boolean;

  @TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
    nullable: true
  })
  evolutionId!: number[] | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  generation!: number;

  @TypeGraphQL.Field(_type => PokemonCountAggregate, {
    nullable: true
  })
  _count!: PokemonCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonSumAggregate, {
    nullable: true
  })
  _sum!: PokemonSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonMinAggregate, {
    nullable: true
  })
  _min!: PokemonMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonMaxAggregate, {
    nullable: true
  })
  _max!: PokemonMaxAggregate | null;
}

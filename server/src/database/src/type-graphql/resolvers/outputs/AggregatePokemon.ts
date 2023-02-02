import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonAvgAggregate } from "../outputs/PokemonAvgAggregate";
import { PokemonCountAggregate } from "../outputs/PokemonCountAggregate";
import { PokemonMaxAggregate } from "../outputs/PokemonMaxAggregate";
import { PokemonMinAggregate } from "../outputs/PokemonMinAggregate";
import { PokemonSumAggregate } from "../outputs/PokemonSumAggregate";

@TypeGraphQL.ObjectType("AggregatePokemon", {
  isAbstract: true
})
export class AggregatePokemon {
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

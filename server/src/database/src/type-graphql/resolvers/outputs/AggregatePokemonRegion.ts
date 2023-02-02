import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonRegionAvgAggregate } from "../outputs/PokemonRegionAvgAggregate";
import { PokemonRegionCountAggregate } from "../outputs/PokemonRegionCountAggregate";
import { PokemonRegionMaxAggregate } from "../outputs/PokemonRegionMaxAggregate";
import { PokemonRegionMinAggregate } from "../outputs/PokemonRegionMinAggregate";
import { PokemonRegionSumAggregate } from "../outputs/PokemonRegionSumAggregate";

@TypeGraphQL.ObjectType("AggregatePokemonRegion", {
  isAbstract: true
})
export class AggregatePokemonRegion {
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

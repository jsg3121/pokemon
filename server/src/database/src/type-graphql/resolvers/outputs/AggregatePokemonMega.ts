import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMegaAvgAggregate } from "../outputs/PokemonMegaAvgAggregate";
import { PokemonMegaCountAggregate } from "../outputs/PokemonMegaCountAggregate";
import { PokemonMegaMaxAggregate } from "../outputs/PokemonMegaMaxAggregate";
import { PokemonMegaMinAggregate } from "../outputs/PokemonMegaMinAggregate";
import { PokemonMegaSumAggregate } from "../outputs/PokemonMegaSumAggregate";

@TypeGraphQL.ObjectType("AggregatePokemonMega", {
  isAbstract: true
})
export class AggregatePokemonMega {
  @TypeGraphQL.Field(_type => PokemonMegaCountAggregate, {
    nullable: true
  })
  _count!: PokemonMegaCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonMegaAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonMegaAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonMegaSumAggregate, {
    nullable: true
  })
  _sum!: PokemonMegaSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonMegaMinAggregate, {
    nullable: true
  })
  _min!: PokemonMegaMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonMegaMaxAggregate, {
    nullable: true
  })
  _max!: PokemonMegaMaxAggregate | null;
}

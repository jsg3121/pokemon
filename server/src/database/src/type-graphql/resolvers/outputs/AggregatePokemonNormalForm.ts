import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonNormalFormAvgAggregate } from "../outputs/PokemonNormalFormAvgAggregate";
import { PokemonNormalFormCountAggregate } from "../outputs/PokemonNormalFormCountAggregate";
import { PokemonNormalFormMaxAggregate } from "../outputs/PokemonNormalFormMaxAggregate";
import { PokemonNormalFormMinAggregate } from "../outputs/PokemonNormalFormMinAggregate";
import { PokemonNormalFormSumAggregate } from "../outputs/PokemonNormalFormSumAggregate";

@TypeGraphQL.ObjectType("AggregatePokemonNormalForm", {
  isAbstract: true,
  simpleResolvers: true
})
export class AggregatePokemonNormalForm {
  @TypeGraphQL.Field(_type => PokemonNormalFormCountAggregate, {
    nullable: true
  })
  _count!: PokemonNormalFormCountAggregate | null;

  @TypeGraphQL.Field(_type => PokemonNormalFormAvgAggregate, {
    nullable: true
  })
  _avg!: PokemonNormalFormAvgAggregate | null;

  @TypeGraphQL.Field(_type => PokemonNormalFormSumAggregate, {
    nullable: true
  })
  _sum!: PokemonNormalFormSumAggregate | null;

  @TypeGraphQL.Field(_type => PokemonNormalFormMinAggregate, {
    nullable: true
  })
  _min!: PokemonNormalFormMinAggregate | null;

  @TypeGraphQL.Field(_type => PokemonNormalFormMaxAggregate, {
    nullable: true
  })
  _max!: PokemonNormalFormMaxAggregate | null;
}

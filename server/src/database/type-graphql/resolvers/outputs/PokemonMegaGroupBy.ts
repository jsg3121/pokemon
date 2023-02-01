import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMegaAvgAggregate } from "../outputs/PokemonMegaAvgAggregate";
import { PokemonMegaCountAggregate } from "../outputs/PokemonMegaCountAggregate";
import { PokemonMegaMaxAggregate } from "../outputs/PokemonMegaMaxAggregate";
import { PokemonMegaMinAggregate } from "../outputs/PokemonMegaMinAggregate";
import { PokemonMegaSumAggregate } from "../outputs/PokemonMegaSumAggregate";

@TypeGraphQL.ObjectType("PokemonMegaGroupBy", {
  isAbstract: true
})
export class PokemonMegaGroupBy {
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

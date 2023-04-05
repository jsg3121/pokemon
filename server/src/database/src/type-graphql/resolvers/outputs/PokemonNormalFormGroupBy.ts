import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonNormalFormAvgAggregate } from "../outputs/PokemonNormalFormAvgAggregate";
import { PokemonNormalFormCountAggregate } from "../outputs/PokemonNormalFormCountAggregate";
import { PokemonNormalFormMaxAggregate } from "../outputs/PokemonNormalFormMaxAggregate";
import { PokemonNormalFormMinAggregate } from "../outputs/PokemonNormalFormMinAggregate";
import { PokemonNormalFormSumAggregate } from "../outputs/PokemonNormalFormSumAggregate";

@TypeGraphQL.ObjectType("PokemonNormalFormGroupBy", {
  isAbstract: true
})
export class PokemonNormalFormGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  pokemonId!: number;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  imagePath!: string;

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

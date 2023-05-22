import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { FormStats } from "../models/FormStats";
import { Pokemon } from "../models/Pokemon";
import { PokemonNormalFormCount } from "../resolvers/outputs/PokemonNormalFormCount";

@TypeGraphQL.ObjectType("PokemonNormalForm", {
  isAbstract: true,
  simpleResolvers: true
})
export class PokemonNormalForm {
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
  imagePath!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  statCode!: string;

  FormStats?: FormStats[];

  pokemon?: Pokemon;

  @TypeGraphQL.Field(_type => PokemonNormalFormCount, {
    nullable: true
  })
  _count?: PokemonNormalFormCount | null;
}

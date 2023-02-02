import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonRegionCreateManyPokemonInput } from "../inputs/PokemonRegionCreateManyPokemonInput";

@TypeGraphQL.InputType("PokemonRegionCreateManyPokemonInputEnvelope", {
  isAbstract: true
})
export class PokemonRegionCreateManyPokemonInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonRegionCreateManyPokemonInput], {
    nullable: false
  })
  data!: PokemonRegionCreateManyPokemonInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

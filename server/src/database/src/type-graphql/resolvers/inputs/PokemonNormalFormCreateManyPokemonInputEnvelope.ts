import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonNormalFormCreateManyPokemonInput } from "../inputs/PokemonNormalFormCreateManyPokemonInput";

@TypeGraphQL.InputType("PokemonNormalFormCreateManyPokemonInputEnvelope", {
  isAbstract: true
})
export class PokemonNormalFormCreateManyPokemonInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonNormalFormCreateManyPokemonInput], {
    nullable: false
  })
  data!: PokemonNormalFormCreateManyPokemonInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PokemonMegaCreateManyPokemonInput } from "../inputs/PokemonMegaCreateManyPokemonInput";

@TypeGraphQL.InputType("PokemonMegaCreateManyPokemonInputEnvelope", {
  isAbstract: true
})
export class PokemonMegaCreateManyPokemonInputEnvelope {
  @TypeGraphQL.Field(_type => [PokemonMegaCreateManyPokemonInput], {
    nullable: false
  })
  data!: PokemonMegaCreateManyPokemonInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}

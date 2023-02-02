import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonMegaOrderByWithRelationInput } from "../../../inputs/PokemonMegaOrderByWithRelationInput";
import { PokemonMegaWhereInput } from "../../../inputs/PokemonMegaWhereInput";
import { PokemonMegaWhereUniqueInput } from "../../../inputs/PokemonMegaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePokemonMegaArgs {
  @TypeGraphQL.Field(_type => PokemonMegaWhereInput, {
    nullable: true
  })
  where?: PokemonMegaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonMegaOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonMegaOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonMegaWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonMegaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

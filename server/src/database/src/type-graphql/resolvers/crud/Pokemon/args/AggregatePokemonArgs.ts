import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonOrderByWithRelationInput } from "../../../inputs/PokemonOrderByWithRelationInput";
import { PokemonWhereInput } from "../../../inputs/PokemonWhereInput";
import { PokemonWhereUniqueInput } from "../../../inputs/PokemonWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePokemonArgs {
  @TypeGraphQL.Field(_type => PokemonWhereInput, {
    nullable: true
  })
  where?: PokemonWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PokemonOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PokemonOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PokemonWhereUniqueInput, {
    nullable: true
  })
  cursor?: PokemonWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}

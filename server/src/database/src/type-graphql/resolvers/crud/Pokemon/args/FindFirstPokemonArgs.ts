import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PokemonOrderByWithRelationInput } from "../../../inputs/PokemonOrderByWithRelationInput";
import { PokemonWhereInput } from "../../../inputs/PokemonWhereInput";
import { PokemonWhereUniqueInput } from "../../../inputs/PokemonWhereUniqueInput";
import { PokemonScalarFieldEnum } from "../../../../enums/PokemonScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstPokemonArgs {
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

  @TypeGraphQL.Field(_type => [PokemonScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "number" | "name" | "type" | "isRegion" | "isMega" | "typeSingle1" | "typeSingle2" | "isEvolution" | "evolutionId" | "generation"> | undefined;
}

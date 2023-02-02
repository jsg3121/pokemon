import * as TypeGraphQL from "type-graphql";
import { Pokemon } from "../../../models/Pokemon";
import { PokemonRegion } from "../../../models/PokemonRegion";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonRegion)
export class PokemonRegionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Pokemon, {
    nullable: false
  })
  async pokemon(@TypeGraphQL.Root() pokemonRegion: PokemonRegion, @TypeGraphQL.Ctx() ctx: any): Promise<Pokemon> {
    return getPrismaFromContext(ctx).pokemonRegion.findUnique({
      where: {
        id: pokemonRegion.id,
      },
    }).pokemon({});
  }
}

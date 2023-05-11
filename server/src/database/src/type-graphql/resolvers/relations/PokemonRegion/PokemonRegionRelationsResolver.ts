import * as TypeGraphQL from "type-graphql";
import { Pokemon } from "../../../models/Pokemon";
import { PokemonRegion } from "../../../models/PokemonRegion";
import { RegionStats } from "../../../models/RegionStats";
import { PokemonRegionRegionStatsArgs } from "./args/PokemonRegionRegionStatsArgs";
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

  @TypeGraphQL.FieldResolver(_type => [RegionStats], {
    nullable: false
  })
  async RegionStats(@TypeGraphQL.Root() pokemonRegion: PokemonRegion, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PokemonRegionRegionStatsArgs): Promise<RegionStats[]> {
    return getPrismaFromContext(ctx).pokemonRegion.findUnique({
      where: {
        id: pokemonRegion.id,
      },
    }).RegionStats(args);
  }
}

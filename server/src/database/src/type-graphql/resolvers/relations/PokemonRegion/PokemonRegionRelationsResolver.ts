import * as TypeGraphQL from "type-graphql";
import { Pokemon } from "../../../models/Pokemon";
import { PokemonRegion } from "../../../models/PokemonRegion";
import { PokemonRegionFormAbilityList } from "../../../models/PokemonRegionFormAbilityList";
import { RegionStats } from "../../../models/RegionStats";
import { PokemonRegionPokemonRegionFormAbilityListArgs } from "./args/PokemonRegionPokemonRegionFormAbilityListArgs";
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

  @TypeGraphQL.FieldResolver(_type => [PokemonRegionFormAbilityList], {
    nullable: false
  })
  async PokemonRegionFormAbilityList(@TypeGraphQL.Root() pokemonRegion: PokemonRegion, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PokemonRegionPokemonRegionFormAbilityListArgs): Promise<PokemonRegionFormAbilityList[]> {
    return getPrismaFromContext(ctx).pokemonRegion.findUnique({
      where: {
        id: pokemonRegion.id,
      },
    }).PokemonRegionFormAbilityList(args);
  }
}

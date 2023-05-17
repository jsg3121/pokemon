import * as TypeGraphQL from "type-graphql";
import { PokemonRegion } from "../../../models/PokemonRegion";
import { RegionStats } from "../../../models/RegionStats";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RegionStats)
export class RegionStatsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => PokemonRegion, {
    nullable: false
  })
  async regionPokemon(@TypeGraphQL.Root() regionStats: RegionStats, @TypeGraphQL.Ctx() ctx: any): Promise<PokemonRegion> {
    return getPrismaFromContext(ctx).regionStats.findUnique({
      where: {
        id: regionStats.id,
      },
    }).regionPokemon({});
  }
}

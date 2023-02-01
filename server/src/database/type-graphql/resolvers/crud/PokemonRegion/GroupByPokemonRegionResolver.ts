import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPokemonRegionArgs } from "./args/GroupByPokemonRegionArgs";
import { PokemonRegion } from "../../../models/PokemonRegion";
import { PokemonRegionGroupBy } from "../../outputs/PokemonRegionGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonRegion)
export class GroupByPokemonRegionResolver {
  @TypeGraphQL.Query(_returns => [PokemonRegionGroupBy], {
    nullable: false
  })
  async groupByPokemonRegion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonRegionArgs): Promise<PokemonRegionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonRegion.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}

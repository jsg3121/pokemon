import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueRegionStatsOrThrowArgs } from "./args/FindUniqueRegionStatsOrThrowArgs";
import { RegionStats } from "../../../models/RegionStats";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RegionStats)
export class FindUniqueRegionStatsOrThrowResolver {
  @TypeGraphQL.Query(_returns => RegionStats, {
    nullable: true
  })
  async findUniqueRegionStatsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueRegionStatsOrThrowArgs): Promise<RegionStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).regionStats.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

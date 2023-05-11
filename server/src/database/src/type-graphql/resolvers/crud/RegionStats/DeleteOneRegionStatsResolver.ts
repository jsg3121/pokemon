import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneRegionStatsArgs } from "./args/DeleteOneRegionStatsArgs";
import { RegionStats } from "../../../models/RegionStats";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RegionStats)
export class DeleteOneRegionStatsResolver {
  @TypeGraphQL.Mutation(_returns => RegionStats, {
    nullable: true
  })
  async deleteOneRegionStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneRegionStatsArgs): Promise<RegionStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).regionStats.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

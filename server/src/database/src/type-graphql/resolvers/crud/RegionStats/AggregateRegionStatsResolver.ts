import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateRegionStatsArgs } from "./args/AggregateRegionStatsArgs";
import { RegionStats } from "../../../models/RegionStats";
import { AggregateRegionStats } from "../../outputs/AggregateRegionStats";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => RegionStats)
export class AggregateRegionStatsResolver {
  @TypeGraphQL.Query(_returns => AggregateRegionStats, {
    nullable: false
  })
  async aggregateRegionStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateRegionStatsArgs): Promise<AggregateRegionStats> {
    return getPrismaFromContext(ctx).regionStats.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}

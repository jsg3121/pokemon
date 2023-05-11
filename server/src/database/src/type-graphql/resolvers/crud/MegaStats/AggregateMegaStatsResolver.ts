import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMegaStatsArgs } from "./args/AggregateMegaStatsArgs";
import { MegaStats } from "../../../models/MegaStats";
import { AggregateMegaStats } from "../../outputs/AggregateMegaStats";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MegaStats)
export class AggregateMegaStatsResolver {
  @TypeGraphQL.Query(_returns => AggregateMegaStats, {
    nullable: false
  })
  async aggregateMegaStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMegaStatsArgs): Promise<AggregateMegaStats> {
    return getPrismaFromContext(ctx).megaStats.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}

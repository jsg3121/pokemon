import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByNormalStatsArgs } from "./args/GroupByNormalStatsArgs";
import { NormalStats } from "../../../models/NormalStats";
import { NormalStatsGroupBy } from "../../outputs/NormalStatsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NormalStats)
export class GroupByNormalStatsResolver {
  @TypeGraphQL.Query(_returns => [NormalStatsGroupBy], {
    nullable: false
  })
  async groupByNormalStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByNormalStatsArgs): Promise<NormalStatsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).normalStats.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}

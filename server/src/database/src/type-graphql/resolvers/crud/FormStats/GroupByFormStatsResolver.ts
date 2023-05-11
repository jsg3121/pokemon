import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByFormStatsArgs } from "./args/GroupByFormStatsArgs";
import { FormStats } from "../../../models/FormStats";
import { FormStatsGroupBy } from "../../outputs/FormStatsGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FormStats)
export class GroupByFormStatsResolver {
  @TypeGraphQL.Query(_returns => [FormStatsGroupBy], {
    nullable: false
  })
  async groupByFormStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByFormStatsArgs): Promise<FormStatsGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).formStats.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}

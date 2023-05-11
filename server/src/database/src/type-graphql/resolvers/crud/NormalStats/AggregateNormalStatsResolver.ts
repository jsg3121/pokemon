import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateNormalStatsArgs } from "./args/AggregateNormalStatsArgs";
import { NormalStats } from "../../../models/NormalStats";
import { AggregateNormalStats } from "../../outputs/AggregateNormalStats";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NormalStats)
export class AggregateNormalStatsResolver {
  @TypeGraphQL.Query(_returns => AggregateNormalStats, {
    nullable: false
  })
  async aggregateNormalStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateNormalStatsArgs): Promise<AggregateNormalStats> {
    return getPrismaFromContext(ctx).normalStats.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}

import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMegaStatsArgs } from "./args/FindFirstMegaStatsArgs";
import { MegaStats } from "../../../models/MegaStats";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MegaStats)
export class FindFirstMegaStatsResolver {
  @TypeGraphQL.Query(_returns => MegaStats, {
    nullable: true
  })
  async findFirstMegaStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstMegaStatsArgs): Promise<MegaStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).megaStats.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstNormalStatsArgs } from "./args/FindFirstNormalStatsArgs";
import { NormalStats } from "../../../models/NormalStats";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NormalStats)
export class FindFirstNormalStatsResolver {
  @TypeGraphQL.Query(_returns => NormalStats, {
    nullable: true
  })
  async findFirstNormalStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstNormalStatsArgs): Promise<NormalStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).normalStats.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

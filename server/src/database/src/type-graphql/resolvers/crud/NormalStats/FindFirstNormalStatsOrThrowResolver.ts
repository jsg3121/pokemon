import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstNormalStatsOrThrowArgs } from "./args/FindFirstNormalStatsOrThrowArgs";
import { NormalStats } from "../../../models/NormalStats";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NormalStats)
export class FindFirstNormalStatsOrThrowResolver {
  @TypeGraphQL.Query(_returns => NormalStats, {
    nullable: true
  })
  async findFirstNormalStatsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstNormalStatsOrThrowArgs): Promise<NormalStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).normalStats.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

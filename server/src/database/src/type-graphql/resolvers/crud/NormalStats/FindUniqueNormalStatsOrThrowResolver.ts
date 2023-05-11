import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueNormalStatsOrThrowArgs } from "./args/FindUniqueNormalStatsOrThrowArgs";
import { NormalStats } from "../../../models/NormalStats";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NormalStats)
export class FindUniqueNormalStatsOrThrowResolver {
  @TypeGraphQL.Query(_returns => NormalStats, {
    nullable: true
  })
  async findUniqueNormalStatsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueNormalStatsOrThrowArgs): Promise<NormalStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).normalStats.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

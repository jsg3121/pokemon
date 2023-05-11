import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMegaStatsOrThrowArgs } from "./args/FindUniqueMegaStatsOrThrowArgs";
import { MegaStats } from "../../../models/MegaStats";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MegaStats)
export class FindUniqueMegaStatsOrThrowResolver {
  @TypeGraphQL.Query(_returns => MegaStats, {
    nullable: true
  })
  async findUniqueMegaStatsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMegaStatsOrThrowArgs): Promise<MegaStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).megaStats.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

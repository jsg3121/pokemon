import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstFormStatsOrThrowArgs } from "./args/FindFirstFormStatsOrThrowArgs";
import { FormStats } from "../../../models/FormStats";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FormStats)
export class FindFirstFormStatsOrThrowResolver {
  @TypeGraphQL.Query(_returns => FormStats, {
    nullable: true
  })
  async findFirstFormStatsOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstFormStatsOrThrowArgs): Promise<FormStats | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).formStats.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

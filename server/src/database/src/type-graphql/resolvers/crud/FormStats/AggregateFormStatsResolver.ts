import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateFormStatsArgs } from "./args/AggregateFormStatsArgs";
import { FormStats } from "../../../models/FormStats";
import { AggregateFormStats } from "../../outputs/AggregateFormStats";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FormStats)
export class AggregateFormStatsResolver {
  @TypeGraphQL.Query(_returns => AggregateFormStats, {
    nullable: false
  })
  async aggregateFormStats(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateFormStatsArgs): Promise<AggregateFormStats> {
    return getPrismaFromContext(ctx).formStats.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}

import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateUseCountArgs } from "./args/AggregateUseCountArgs";
import { UseCount } from "../../../models/UseCount";
import { AggregateUseCount } from "../../outputs/AggregateUseCount";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => UseCount)
export class AggregateUseCountResolver {
  @TypeGraphQL.Query(_returns => AggregateUseCount, {
    nullable: false
  })
  async aggregateUseCount(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateUseCountArgs): Promise<AggregateUseCount> {
    return getPrismaFromContext(ctx).useCount.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}

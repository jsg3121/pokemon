import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByTypeRelationArgs } from "./args/GroupByTypeRelationArgs";
import { TypeRelation } from "../../../models/TypeRelation";
import { TypeRelationGroupBy } from "../../outputs/TypeRelationGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TypeRelation)
export class GroupByTypeRelationResolver {
  @TypeGraphQL.Query(_returns => [TypeRelationGroupBy], {
    nullable: false
  })
  async groupByTypeRelation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTypeRelationArgs): Promise<TypeRelationGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeRelation.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}

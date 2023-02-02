import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTypeRelationArgs } from "./args/FindFirstTypeRelationArgs";
import { TypeRelation } from "../../../models/TypeRelation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TypeRelation)
export class FindFirstTypeRelationResolver {
  @TypeGraphQL.Query(_returns => TypeRelation, {
    nullable: true
  })
  async findFirstTypeRelation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTypeRelationArgs): Promise<TypeRelation | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeRelation.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

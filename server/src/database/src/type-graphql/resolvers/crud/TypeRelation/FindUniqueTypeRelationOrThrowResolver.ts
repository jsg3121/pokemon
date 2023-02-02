import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTypeRelationOrThrowArgs } from "./args/FindUniqueTypeRelationOrThrowArgs";
import { TypeRelation } from "../../../models/TypeRelation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TypeRelation)
export class FindUniqueTypeRelationOrThrowResolver {
  @TypeGraphQL.Query(_returns => TypeRelation, {
    nullable: true
  })
  async getTypeRelation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTypeRelationOrThrowArgs): Promise<TypeRelation | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeRelation.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

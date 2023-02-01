import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneTypeRelationArgs } from "./args/UpsertOneTypeRelationArgs";
import { TypeRelation } from "../../../models/TypeRelation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TypeRelation)
export class UpsertOneTypeRelationResolver {
  @TypeGraphQL.Mutation(_returns => TypeRelation, {
    nullable: false
  })
  async upsertOneTypeRelation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneTypeRelationArgs): Promise<TypeRelation> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).typeRelation.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

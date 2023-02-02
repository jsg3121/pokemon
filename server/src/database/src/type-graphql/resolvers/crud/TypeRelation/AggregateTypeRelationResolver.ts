import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTypeRelationArgs } from "./args/AggregateTypeRelationArgs";
import { TypeRelation } from "../../../models/TypeRelation";
import { AggregateTypeRelation } from "../../outputs/AggregateTypeRelation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TypeRelation)
export class AggregateTypeRelationResolver {
  @TypeGraphQL.Query(_returns => AggregateTypeRelation, {
    nullable: false
  })
  async aggregateTypeRelation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTypeRelationArgs): Promise<AggregateTypeRelation> {
    return getPrismaFromContext(ctx).typeRelation.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}

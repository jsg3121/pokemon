import * as TypeGraphQL from "type-graphql";
import { NormalStats } from "../../../models/NormalStats";
import { Pokemon } from "../../../models/Pokemon";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NormalStats)
export class NormalStatsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Pokemon, {
    nullable: false
  })
  async pokemon(@TypeGraphQL.Root() normalStats: NormalStats, @TypeGraphQL.Ctx() ctx: any): Promise<Pokemon> {
    return getPrismaFromContext(ctx).normalStats.findUnique({
      where: {
        id: normalStats.id,
      },
    }).pokemon({});
  }
}

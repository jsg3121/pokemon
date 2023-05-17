import * as TypeGraphQL from "type-graphql";
import { MegaStats } from "../../../models/MegaStats";
import { PokemonMega } from "../../../models/PokemonMega";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MegaStats)
export class MegaStatsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => PokemonMega, {
    nullable: false
  })
  async megaPokemon(@TypeGraphQL.Root() megaStats: MegaStats, @TypeGraphQL.Ctx() ctx: any): Promise<PokemonMega> {
    return getPrismaFromContext(ctx).megaStats.findUnique({
      where: {
        id: megaStats.id,
      },
    }).megaPokemon({});
  }
}

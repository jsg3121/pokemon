import * as TypeGraphQL from "type-graphql";
import { MegaStats } from "../../../models/MegaStats";
import { Pokemon } from "../../../models/Pokemon";
import { PokemonMega } from "../../../models/PokemonMega";
import { PokemonMegaMegaStatsArgs } from "./args/PokemonMegaMegaStatsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMega)
export class PokemonMegaRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Pokemon, {
    nullable: false
  })
  async pokemon(@TypeGraphQL.Root() pokemonMega: PokemonMega, @TypeGraphQL.Ctx() ctx: any): Promise<Pokemon> {
    return getPrismaFromContext(ctx).pokemonMega.findUnique({
      where: {
        id: pokemonMega.id,
      },
    }).pokemon({});
  }

  @TypeGraphQL.FieldResolver(_type => [MegaStats], {
    nullable: false
  })
  async MegaStats(@TypeGraphQL.Root() pokemonMega: PokemonMega, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PokemonMegaMegaStatsArgs): Promise<MegaStats[]> {
    return getPrismaFromContext(ctx).pokemonMega.findUnique({
      where: {
        id: pokemonMega.id,
      },
    }).MegaStats(args);
  }
}

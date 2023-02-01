import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPokemonMegaArgs } from "./args/GroupByPokemonMegaArgs";
import { PokemonMega } from "../../../models/PokemonMega";
import { PokemonMegaGroupBy } from "../../outputs/PokemonMegaGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMega)
export class GroupByPokemonMegaResolver {
  @TypeGraphQL.Query(_returns => [PokemonMegaGroupBy], {
    nullable: false
  })
  async groupByPokemonMega(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonMegaArgs): Promise<PokemonMegaGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMega.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}

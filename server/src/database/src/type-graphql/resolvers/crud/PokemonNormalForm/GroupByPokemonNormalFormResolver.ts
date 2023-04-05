import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPokemonNormalFormArgs } from "./args/GroupByPokemonNormalFormArgs";
import { PokemonNormalForm } from "../../../models/PokemonNormalForm";
import { PokemonNormalFormGroupBy } from "../../outputs/PokemonNormalFormGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonNormalForm)
export class GroupByPokemonNormalFormResolver {
  @TypeGraphQL.Query(_returns => [PokemonNormalFormGroupBy], {
    nullable: false
  })
  async groupByPokemonNormalForm(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPokemonNormalFormArgs): Promise<PokemonNormalFormGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonNormalForm.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}

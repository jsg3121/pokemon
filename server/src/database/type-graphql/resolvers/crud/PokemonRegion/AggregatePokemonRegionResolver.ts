import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonRegionArgs } from "./args/AggregatePokemonRegionArgs";
import { PokemonRegion } from "../../../models/PokemonRegion";
import { AggregatePokemonRegion } from "../../outputs/AggregatePokemonRegion";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonRegion)
export class AggregatePokemonRegionResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonRegion, {
    nullable: false
  })
  async aggregatePokemonRegion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonRegionArgs): Promise<AggregatePokemonRegion> {
    return getPrismaFromContext(ctx).pokemonRegion.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}

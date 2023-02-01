import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOnePokemonRegionArgs } from "./args/UpsertOnePokemonRegionArgs";
import { PokemonRegion } from "../../../models/PokemonRegion";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonRegion)
export class UpsertOnePokemonRegionResolver {
  @TypeGraphQL.Mutation(_returns => PokemonRegion, {
    nullable: false
  })
  async upsertOnePokemonRegion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOnePokemonRegionArgs): Promise<PokemonRegion> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonRegion.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

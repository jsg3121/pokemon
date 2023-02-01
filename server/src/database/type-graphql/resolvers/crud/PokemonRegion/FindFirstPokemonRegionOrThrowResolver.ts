import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonRegionOrThrowArgs } from "./args/FindFirstPokemonRegionOrThrowArgs";
import { PokemonRegion } from "../../../models/PokemonRegion";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonRegion)
export class FindFirstPokemonRegionOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonRegion, {
    nullable: true
  })
  async findFirstPokemonRegionOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonRegionOrThrowArgs): Promise<PokemonRegion | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonRegion.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

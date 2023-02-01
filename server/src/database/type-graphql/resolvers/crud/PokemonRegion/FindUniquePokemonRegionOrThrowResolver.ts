import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonRegionOrThrowArgs } from "./args/FindUniquePokemonRegionOrThrowArgs";
import { PokemonRegion } from "../../../models/PokemonRegion";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonRegion)
export class FindUniquePokemonRegionOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonRegion, {
    nullable: true
  })
  async getPokemonRegion(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonRegionOrThrowArgs): Promise<PokemonRegion | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonRegion.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

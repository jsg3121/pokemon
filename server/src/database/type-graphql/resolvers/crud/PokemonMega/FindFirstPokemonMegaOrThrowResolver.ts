import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonMegaOrThrowArgs } from "./args/FindFirstPokemonMegaOrThrowArgs";
import { PokemonMega } from "../../../models/PokemonMega";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMega)
export class FindFirstPokemonMegaOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonMega, {
    nullable: true
  })
  async findFirstPokemonMegaOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonMegaOrThrowArgs): Promise<PokemonMega | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMega.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

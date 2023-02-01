import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOnePokemonMegaArgs } from "./args/UpdateOnePokemonMegaArgs";
import { PokemonMega } from "../../../models/PokemonMega";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMega)
export class UpdateOnePokemonMegaResolver {
  @TypeGraphQL.Mutation(_returns => PokemonMega, {
    nullable: true
  })
  async updateOnePokemonMega(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOnePokemonMegaArgs): Promise<PokemonMega | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMega.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOnePokemonMegaArgs } from "./args/CreateOnePokemonMegaArgs";
import { PokemonMega } from "../../../models/PokemonMega";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMega)
export class CreateOnePokemonMegaResolver {
  @TypeGraphQL.Mutation(_returns => PokemonMega, {
    nullable: false
  })
  async createOnePokemonMega(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOnePokemonMegaArgs): Promise<PokemonMega> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonMega.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

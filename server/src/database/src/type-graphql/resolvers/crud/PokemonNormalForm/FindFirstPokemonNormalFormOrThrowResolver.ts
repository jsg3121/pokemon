import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonNormalFormOrThrowArgs } from "./args/FindFirstPokemonNormalFormOrThrowArgs";
import { PokemonNormalForm } from "../../../models/PokemonNormalForm";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonNormalForm)
export class FindFirstPokemonNormalFormOrThrowResolver {
  @TypeGraphQL.Query(_returns => PokemonNormalForm, {
    nullable: true
  })
  async findFirstPokemonNormalFormOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonNormalFormOrThrowArgs): Promise<PokemonNormalForm | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonNormalForm.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

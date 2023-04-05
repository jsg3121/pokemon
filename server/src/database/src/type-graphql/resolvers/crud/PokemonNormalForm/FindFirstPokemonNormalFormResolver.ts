import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPokemonNormalFormArgs } from "./args/FindFirstPokemonNormalFormArgs";
import { PokemonNormalForm } from "../../../models/PokemonNormalForm";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonNormalForm)
export class FindFirstPokemonNormalFormResolver {
  @TypeGraphQL.Query(_returns => PokemonNormalForm, {
    nullable: true
  })
  async findFirstPokemonNormalForm(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPokemonNormalFormArgs): Promise<PokemonNormalForm | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonNormalForm.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

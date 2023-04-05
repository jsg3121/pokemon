import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOnePokemonNormalFormArgs } from "./args/UpdateOnePokemonNormalFormArgs";
import { PokemonNormalForm } from "../../../models/PokemonNormalForm";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonNormalForm)
export class UpdateOnePokemonNormalFormResolver {
  @TypeGraphQL.Mutation(_returns => PokemonNormalForm, {
    nullable: true
  })
  async updateOnePokemonNormalForm(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOnePokemonNormalFormArgs): Promise<PokemonNormalForm | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonNormalForm.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

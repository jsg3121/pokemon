import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOnePokemonNormalFormArgs } from "./args/DeleteOnePokemonNormalFormArgs";
import { PokemonNormalForm } from "../../../models/PokemonNormalForm";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonNormalForm)
export class DeleteOnePokemonNormalFormResolver {
  @TypeGraphQL.Mutation(_returns => PokemonNormalForm, {
    nullable: true
  })
  async deleteOnePokemonNormalForm(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOnePokemonNormalFormArgs): Promise<PokemonNormalForm | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemonNormalForm.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

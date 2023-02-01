import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePokemonOrThrowArgs } from "./args/FindUniquePokemonOrThrowArgs";
import { Pokemon } from "../../../models/Pokemon";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pokemon)
export class FindUniquePokemonOrThrowResolver {
  @TypeGraphQL.Query(_returns => Pokemon, {
    nullable: true
  })
  async findUniquePokemonOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePokemonOrThrowArgs): Promise<Pokemon | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pokemon.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

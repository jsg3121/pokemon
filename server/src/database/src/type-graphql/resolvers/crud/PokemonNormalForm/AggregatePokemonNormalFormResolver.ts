import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonNormalFormArgs } from "./args/AggregatePokemonNormalFormArgs";
import { PokemonNormalForm } from "../../../models/PokemonNormalForm";
import { AggregatePokemonNormalForm } from "../../outputs/AggregatePokemonNormalForm";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonNormalForm)
export class AggregatePokemonNormalFormResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonNormalForm, {
    nullable: false
  })
  async aggregatePokemonNormalForm(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonNormalFormArgs): Promise<AggregatePokemonNormalForm> {
    return getPrismaFromContext(ctx).pokemonNormalForm.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}

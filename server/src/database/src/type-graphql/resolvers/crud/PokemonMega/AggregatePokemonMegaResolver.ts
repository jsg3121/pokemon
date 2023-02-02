import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonMegaArgs } from "./args/AggregatePokemonMegaArgs";
import { PokemonMega } from "../../../models/PokemonMega";
import { AggregatePokemonMega } from "../../outputs/AggregatePokemonMega";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonMega)
export class AggregatePokemonMegaResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemonMega, {
    nullable: false
  })
  async aggregatePokemonMega(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonMegaArgs): Promise<AggregatePokemonMega> {
    return getPrismaFromContext(ctx).pokemonMega.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}

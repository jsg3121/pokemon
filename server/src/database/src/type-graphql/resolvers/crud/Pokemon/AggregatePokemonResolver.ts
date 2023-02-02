import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePokemonArgs } from "./args/AggregatePokemonArgs";
import { Pokemon } from "../../../models/Pokemon";
import { AggregatePokemon } from "../../outputs/AggregatePokemon";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pokemon)
export class AggregatePokemonResolver {
  @TypeGraphQL.Query(_returns => AggregatePokemon, {
    nullable: false
  })
  async aggregatePokemon(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePokemonArgs): Promise<AggregatePokemon> {
    return getPrismaFromContext(ctx).pokemon.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}

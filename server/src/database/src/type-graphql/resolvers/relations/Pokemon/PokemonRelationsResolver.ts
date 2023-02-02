import * as TypeGraphQL from "type-graphql";
import { Pokemon } from "../../../models/Pokemon";
import { PokemonMega } from "../../../models/PokemonMega";
import { PokemonRegion } from "../../../models/PokemonRegion";
import { PokemonPokemonMegaArgs } from "./args/PokemonPokemonMegaArgs";
import { PokemonPokemonRegionArgs } from "./args/PokemonPokemonRegionArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pokemon)
export class PokemonRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [PokemonRegion], {
    nullable: false
  })
  async PokemonRegion(@TypeGraphQL.Root() pokemon: Pokemon, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PokemonPokemonRegionArgs): Promise<PokemonRegion[]> {
    return getPrismaFromContext(ctx).pokemon.findUnique({
      where: {
        id: pokemon.id,
      },
    }).PokemonRegion(args);
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonMega], {
    nullable: false
  })
  async PokemonMega(@TypeGraphQL.Root() pokemon: Pokemon, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PokemonPokemonMegaArgs): Promise<PokemonMega[]> {
    return getPrismaFromContext(ctx).pokemon.findUnique({
      where: {
        id: pokemon.id,
      },
    }).PokemonMega(args);
  }
}

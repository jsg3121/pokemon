import * as TypeGraphQL from "type-graphql";
import { NormalStats } from "../../../models/NormalStats";
import { Pokemon } from "../../../models/Pokemon";
import { PokemonAbilities } from "../../../models/PokemonAbilities";
import { PokemonMega } from "../../../models/PokemonMega";
import { PokemonNormalForm } from "../../../models/PokemonNormalForm";
import { PokemonRegion } from "../../../models/PokemonRegion";
import { PokemonPokemonAbilitiesArgs } from "./args/PokemonPokemonAbilitiesArgs";
import { PokemonPokemonMegaArgs } from "./args/PokemonPokemonMegaArgs";
import { PokemonPokemonNormalFormArgs } from "./args/PokemonPokemonNormalFormArgs";
import { PokemonPokemonRegionArgs } from "./args/PokemonPokemonRegionArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pokemon)
export class PokemonRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => NormalStats, {
    nullable: true
  })
  async NormalStats(@TypeGraphQL.Root() pokemon: Pokemon, @TypeGraphQL.Ctx() ctx: any): Promise<NormalStats | null> {
    return getPrismaFromContext(ctx).pokemon.findUnique({
      where: {
        id: pokemon.id,
      },
    }).NormalStats({});
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

  @TypeGraphQL.FieldResolver(_type => [PokemonNormalForm], {
    nullable: false
  })
  async PokemonNormalForm(@TypeGraphQL.Root() pokemon: Pokemon, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PokemonPokemonNormalFormArgs): Promise<PokemonNormalForm[]> {
    return getPrismaFromContext(ctx).pokemon.findUnique({
      where: {
        id: pokemon.id,
      },
    }).PokemonNormalForm(args);
  }

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

  @TypeGraphQL.FieldResolver(_type => [PokemonAbilities], {
    nullable: false
  })
  async PokemonAbilities(@TypeGraphQL.Root() pokemon: Pokemon, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PokemonPokemonAbilitiesArgs): Promise<PokemonAbilities[]> {
    return getPrismaFromContext(ctx).pokemon.findUnique({
      where: {
        id: pokemon.id,
      },
    }).PokemonAbilities(args);
  }
}

import * as TypeGraphQL from "type-graphql";
import { FormStats } from "../../../models/FormStats";
import { Pokemon } from "../../../models/Pokemon";
import { PokemonAbilityList } from "../../../models/PokemonAbilityList";
import { PokemonNormalForm } from "../../../models/PokemonNormalForm";
import { PokemonNormalFormFormStatsArgs } from "./args/PokemonNormalFormFormStatsArgs";
import { PokemonNormalFormPokemonAbilityListArgs } from "./args/PokemonNormalFormPokemonAbilityListArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PokemonNormalForm)
export class PokemonNormalFormRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [FormStats], {
    nullable: false
  })
  async FormStats(@TypeGraphQL.Root() pokemonNormalForm: PokemonNormalForm, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PokemonNormalFormFormStatsArgs): Promise<FormStats[]> {
    return getPrismaFromContext(ctx).pokemonNormalForm.findUnique({
      where: {
        id: pokemonNormalForm.id,
      },
    }).FormStats(args);
  }

  @TypeGraphQL.FieldResolver(_type => Pokemon, {
    nullable: false
  })
  async pokemon(@TypeGraphQL.Root() pokemonNormalForm: PokemonNormalForm, @TypeGraphQL.Ctx() ctx: any): Promise<Pokemon> {
    return getPrismaFromContext(ctx).pokemonNormalForm.findUnique({
      where: {
        id: pokemonNormalForm.id,
      },
    }).pokemon({});
  }

  @TypeGraphQL.FieldResolver(_type => [PokemonAbilityList], {
    nullable: false
  })
  async PokemonAbilityList(@TypeGraphQL.Root() pokemonNormalForm: PokemonNormalForm, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PokemonNormalFormPokemonAbilityListArgs): Promise<PokemonAbilityList[]> {
    return getPrismaFromContext(ctx).pokemonNormalForm.findUnique({
      where: {
        id: pokemonNormalForm.id,
      },
    }).PokemonAbilityList(args);
  }
}

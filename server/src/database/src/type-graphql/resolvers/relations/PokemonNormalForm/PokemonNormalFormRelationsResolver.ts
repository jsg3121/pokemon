import * as TypeGraphQL from "type-graphql";
import { FormStats } from "../../../models/FormStats";
import { Pokemon } from "../../../models/Pokemon";
import { PokemonNormalForm } from "../../../models/PokemonNormalForm";
import { PokemonNormalFormAbilityList } from "../../../models/PokemonNormalFormAbilityList";
import { PokemonNormalFormFormStatsArgs } from "./args/PokemonNormalFormFormStatsArgs";
import { PokemonNormalFormPokemonNormalFormAbilityListArgs } from "./args/PokemonNormalFormPokemonNormalFormAbilityListArgs";
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

  @TypeGraphQL.FieldResolver(_type => [PokemonNormalFormAbilityList], {
    nullable: false
  })
  async PokemonNormalFormAbilityList(@TypeGraphQL.Root() pokemonNormalForm: PokemonNormalForm, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: PokemonNormalFormPokemonNormalFormAbilityListArgs): Promise<PokemonNormalFormAbilityList[]> {
    return getPrismaFromContext(ctx).pokemonNormalForm.findUnique({
      where: {
        id: pokemonNormalForm.id,
      },
    }).PokemonNormalFormAbilityList(args);
  }
}

import * as TypeGraphQL from "type-graphql";
import { FormStats } from "../../../models/FormStats";
import { PokemonNormalForm } from "../../../models/PokemonNormalForm";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => FormStats)
export class FormStatsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => PokemonNormalForm, {
    nullable: false
  })
  async normalFormPokemon(@TypeGraphQL.Root() formStats: FormStats, @TypeGraphQL.Ctx() ctx: any): Promise<PokemonNormalForm> {
    return getPrismaFromContext(ctx).formStats.findUnique({
      where: {
        id: formStats.id,
      },
    }).normalFormPokemon({});
  }
}

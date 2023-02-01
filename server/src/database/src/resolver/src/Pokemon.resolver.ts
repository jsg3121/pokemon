import { PrismaClient } from '@prisma/client'
import { Arg, Query, Resolver } from 'type-graphql'
import { Pokemon, PokemonMega, PokemonRegion } from '../../../type-graphql'

const prisma = new PrismaClient()

@Resolver()
export default class PokemonResolver {
  @Query(() => [Pokemon])
  public async getList(): Promise<Pokemon[]> {
    return prisma.pokemon.findMany()
  }

  @Query(() => Pokemon)
  public async getSinglePokemon(
    @Arg('number') number: number
  ): Promise<Pokemon> {
    return prisma.pokemon.findUnique({
      where: {
        number,
      },
    })
  }

  @Query(() => PokemonRegion)
  public async getRegionForm(
    @Arg('number') number: number
  ): Promise<PokemonRegion> {
    return prisma.pokemonRegion.findUnique({
      where: {
        id: number,
      },
    })
  }

  @Query(() => PokemonMega)
  public async getMegaEvolution(
    @Arg('number') number: number
  ): Promise<PokemonMega> {
    return prisma.pokemonMega.findUnique({
      where: {
        id: number,
      },
    })
  }
}

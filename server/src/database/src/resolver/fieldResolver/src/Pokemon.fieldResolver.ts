import { PrismaClient } from '@prisma/client'
import { FieldResolver, Resolver, Root } from 'type-graphql'
import { PokemonAbiltyInfo } from '../../../objects'
import { NormalStats, Pokemon } from '../../../type-graphql'

const prisma = new PrismaClient()

@Resolver(Pokemon)
export default class PokemonFieldResolver {
  @FieldResolver(() => NormalStats, {
    name: 'stats',
    description: 'pokemonList fieldResover',
  })
  public async getPokemonFilter(@Root() pokemon: Pokemon) {
    return pokemon.NormalStats
  }

  @FieldResolver(() => [PokemonAbiltyInfo], {
    name: 'abilities',
    description: 'pokemonList fieldResover',
  })
  public async getAilities(
    @Root() pokemon: Pokemon
  ): Promise<Array<PokemonAbiltyInfo>> {
    const abilityIds = pokemon.PokemonAbilityList.map((item) => item.abilityId)

    const abilityInfo = await prisma.pokemonAbilities.findMany({
      where: {
        abilityId: {
          in: abilityIds,
        },
      },
    })

    const abilities: Array<PokemonAbiltyInfo> = abilityIds.map(
      (abilityId, index) => {
        const pokemonInfoData = pokemon.PokemonAbilityList[index]
        const abilityInfoData = abilityInfo.find(
          (item) => item.abilityId === abilityId
        )

        return {
          pokemonId: pokemonInfoData.pokemonId,
          abilityId: pokemonInfoData.abilityId,
          name: abilityInfoData.name,
          description: abilityInfoData.description,
          isHidden: pokemonInfoData.isHidden,
        }
      }
    )

    return abilities
  }
}

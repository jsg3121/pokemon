import { PrismaClient } from '@prisma/client'
import { FieldResolver, Resolver, Root } from 'type-graphql'
import {
  FormStats,
  MegaStats,
  PokemonMega,
  PokemonNormalForm,
  PokemonRegion,
  RegionStats,
} from '../../../type-graphql'
import {
  PokemonNormalFormAbilityInfo,
  PokemonRegionFormAbilityInfo,
} from '../../../objects/src/pokemon.object'

const prisma = new PrismaClient()

@Resolver(PokemonMega)
class MegaFieldResover {
  @FieldResolver(() => MegaStats, {
    name: 'megaStats',
    description: '메가진화 상태 종족값',
    nullable: true,
  })
  public async getSinglePokemon(@Root() pokemon: PokemonMega) {
    return await prisma.megaStats.findFirst({
      where: {
        statCode: pokemon.statCode,
      },
    })
  }
}

@Resolver(PokemonRegion)
class RegionFieldResover {
  @FieldResolver(() => RegionStats, {
    name: 'regionStats',
    description: '리전폼 포켓몬 종족값',
    nullable: true,
  })
  public async getSinglePokemon(@Root() pokemon: PokemonRegion) {
    return await prisma.regionStats.findFirst({
      where: {
        statCode: pokemon.statCode,
      },
    })
  }

  @FieldResolver(() => [PokemonRegionFormAbilityInfo], {
    name: 'abilities',
    description: 'pokemonList fieldResover',
  })
  public async getAilities(
    @Root() pokemon: PokemonRegion
  ): Promise<Array<PokemonRegionFormAbilityInfo>> {
    const abilityIds = pokemon.PokemonRegionFormAbilityList.map(
      (item) => item.abilityId
    )

    const abilityInfo = await prisma.pokemonAbilities.findMany({
      where: {
        abilityId: {
          in: abilityIds,
        },
      },
    })

    const abilities: Array<PokemonRegionFormAbilityInfo> = abilityIds.map(
      (_, index) => {
        const abilitData = pokemon.PokemonRegionFormAbilityList[index]
        return {
          statCode: abilitData.statCode,
          abilityId: abilitData.abilityId,
          name: abilityInfo[index].name,
          description: abilityInfo[index].description,
          isHidden: abilitData.isHidden,
        }
      }
    )

    return abilities
  }
}

@Resolver(PokemonNormalForm)
class FormFieldResover {
  @FieldResolver(() => FormStats, {
    name: 'formStats',
    description: '노말폼 변경시 종족값',
    nullable: true,
  })
  public async getSinglePokemon(@Root() pokemon: PokemonNormalForm) {
    return await prisma.formStats.findFirst({
      where: {
        statCode: pokemon.statCode,
      },
    })
  }

  @FieldResolver(() => [PokemonNormalFormAbilityInfo], {
    name: 'abilities',
    description: 'pokemonList fieldResover',
  })
  public async getAilities(
    @Root() pokemon: PokemonNormalForm
  ): Promise<Array<PokemonNormalFormAbilityInfo>> {
    const abilityIds = pokemon.PokemonNormalFormAbilityList.map(
      (item) => item.abilityId
    )

    const abilityInfo = await prisma.pokemonAbilities.findMany({
      where: {
        abilityId: {
          in: abilityIds,
        },
      },
    })

    const abilities: Array<PokemonNormalFormAbilityInfo> = abilityIds.map(
      (_, index) => {
        const abilitData = pokemon.PokemonNormalFormAbilityList[index]
        return {
          statCode: abilitData.statCode,
          abilityId: abilitData.abilityId,
          name: abilityInfo[index].name,
          description: abilityInfo[index].description,
          isHidden: abilitData.isHidden,
        }
      }
    )

    return abilities
  }
}

export const DetailFieldResover = [
  MegaFieldResover,
  RegionFieldResover,
  FormFieldResover,
]

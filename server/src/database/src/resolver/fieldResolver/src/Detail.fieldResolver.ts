import { PrismaClient } from '@prisma/client'
import { FieldResolver, Resolver, Root } from 'type-graphql'
import {
  PokemonMegaAbilityInfo,
  PokemonNormalFormAbilityInfo,
  PokemonRegionFormAbilityInfo,
} from '../../../objects/src/pokemon.object'
import {
  FormStats,
  MegaStats,
  PokemonMega,
  PokemonNormalForm,
  PokemonRegion,
  RegionStats,
} from '../../../type-graphql'

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

  @FieldResolver(() => [PokemonMegaAbilityInfo], {
    name: 'abilities',
    description: 'pokemonList fieldResover',
  })
  public async getAilities(
    @Root() pokemon: PokemonMega
  ): Promise<Array<PokemonMegaAbilityInfo>> {
    const abilityIds = pokemon.PokemonMegaAbilityList.map(
      (item) => item.abilityId
    )

    const abilityInfo = await prisma.pokemonAbilities.findMany({
      where: {
        abilityId: {
          in: abilityIds,
        },
      },
    })

    const abilities: Array<PokemonMegaAbilityInfo> = abilityIds
      .map((abilityId, index) => {
        const pokemonInfoData = pokemon.PokemonMegaAbilityList[index]
        const abilityInfoData = abilityInfo.find(
          (item) => item.abilityId === abilityId
        )

        return {
          statCode: pokemonInfoData.statCode,
          abilityId: pokemonInfoData.abilityId,
          name: abilityInfoData.name,
          description: abilityInfoData.description,
          isHidden: pokemonInfoData.isHidden,
        }
      })
      .sort((a, b) => Number(a.isHidden) - Number(b.isHidden))

    return abilities
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

    const abilities: Array<PokemonRegionFormAbilityInfo> = abilityIds
      .map((abilityId, index) => {
        const pokemonInfoData = pokemon.PokemonRegionFormAbilityList[index]
        const abilityInfoData = abilityInfo.find(
          (item) => item.abilityId === abilityId
        )

        return {
          statCode: pokemonInfoData.statCode,
          abilityId: pokemonInfoData.abilityId,
          name: abilityInfoData.name,
          description: abilityInfoData.description,
          isHidden: pokemonInfoData.isHidden,
        }
      })
      .sort((a, b) => Number(a.isHidden) - Number(b.isHidden))

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

    const abilities: Array<PokemonNormalFormAbilityInfo> = abilityIds
      .map((abilityId, index) => {
        const pokemonInfoData = pokemon.PokemonNormalFormAbilityList[index]
        const abilityInfoData = abilityInfo.find(
          (item) => item.abilityId === abilityId
        )

        return {
          statCode: pokemonInfoData.statCode,
          abilityId: pokemonInfoData.abilityId,
          name: abilityInfoData.name,
          description: abilityInfoData.description,
          isHidden: pokemonInfoData.isHidden,
        }
      })
      .sort((a, b) => Number(a.isHidden) - Number(b.isHidden))

    return abilities
  }
}

export const DetailFieldResover = [
  MegaFieldResover,
  RegionFieldResover,
  FormFieldResover,
]

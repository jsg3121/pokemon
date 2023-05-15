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
}

export const DetailFieldResover = [
  MegaFieldResover,
  RegionFieldResover,
  FormFieldResover,
]

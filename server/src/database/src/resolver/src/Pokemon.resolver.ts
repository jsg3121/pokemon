import { PrismaClient } from '@prisma/client'
import { Arg, Int, Query, Resolver } from 'type-graphql'
import {
  FormStats,
  MegaStats,
  NormalStats,
  Pokemon,
  PokemonMega,
  PokemonNormalForm,
  PokemonRegion,
  RegionStats,
} from '../../type-graphql'
import dayjs from 'dayjs'
import locale from 'dayjs/locale/ko'
import { CacheControl } from '../../module/cacheControl'

dayjs.locale(locale)

const cacheTtl = 60 * 60 * 12 // 초 단위 기준 12시간

const prisma = new PrismaClient()
@Resolver()
export default class PokemonResolver {
  /**
   * @author 장선규
   * @description 포켓몬 리스트 조회
   * @returns {Array<Pokemon>}
   */
  @Query(() => [Pokemon])
  @CacheControl({ maxAge: cacheTtl })
  public async getList(): Promise<Array<Pokemon>> {
    return await prisma.pokemon.findMany({
      include: {
        NormalStats: true,
      },
      orderBy: [{ number: 'asc' }],
    })
  }

  /**
   * @author 장선규
   * @description 단일 포켓몬 정보 조회
   * @param number 포켓몬 번호
   * @returns {Pokemon}
   */
  @Query(() => Pokemon)
  @CacheControl({ maxAge: cacheTtl })
  public async getSinglePokemon(
    @Arg('number') number: number
  ): Promise<Pokemon> {
    const pokemonData = await prisma.pokemon.findUnique({
      include: {
        NormalStats: true,
        PokemonAbilityList: true,
      },
      where: {
        number,
      },
    })

    return {
      ...pokemonData,
    }
  }

  /**
   * @author 장선규
   * @description 포켓몬 리전폼 정보 조회
   * @param number 포켓몬 번호
   * @returns {PokemonRegion}
   */
  @Query(() => [PokemonRegion])
  @CacheControl({ maxAge: cacheTtl })
  public async getRegionForm(
    @Arg('number') number: number
  ): Promise<Array<PokemonRegion>> {
    const data = await prisma.pokemonRegion.findMany({
      where: {
        pokemonNumber: number,
      },
      include: {
        PokemonRegionFormAbilityList: true,
      },
      orderBy: {
        id: 'asc',
      },
    })

    if (data) {
      return data
    } else {
      throw new Error('No data!!')
    }
  }

  /**
   * @author 장선규
   * @description 포켓몬 메가진화 정보 조회
   * @param number 포켓몬 번호
   * @returns {PokemonMega}
   */
  @Query(() => [PokemonMega])
  @CacheControl({ maxAge: cacheTtl })
  public async getMegaEvolution(
    @Arg('number') number: number
  ): Promise<Array<PokemonMega>> {
    const data = await prisma.pokemonMega.findMany({
      where: {
        pokemonNumber: number,
      },
      include: {
        PokemonMegaAbilityList: true,
      },
      orderBy: {
        id: 'asc',
      },
    })

    if (data) {
      return data
    } else {
      throw new Error('No data!!')
    }
  }

  /**
   * @author 장선규
   * @description 포켓몬 검색 필터
   * @param number 검색 필터 조건
   * @returns {Promise<Pokemon[]>}
   */
  @Query(() => [Pokemon], {
    nullable: true,
  })
  @CacheControl({ maxAge: cacheTtl })
  public async getPokemonFilter(
    @Arg('generation', () => [String], { nullable: true })
    generation: string[],
    @Arg('name', { nullable: true }) name: string,
    @Arg('pokemonNumber', () => Int, { nullable: true }) pokemonNumber: number,
    @Arg('isEvolution', { nullable: true }) isEvolution: boolean,
    @Arg('isRegion', { nullable: true }) isRegion: boolean,
    @Arg('isMega', { nullable: true }) isMega: boolean,
    @Arg('type', () => [String], { nullable: true })
    type: string[]
  ): Promise<Pokemon[]> {
    console.log(dayjs().format('YYYY/MM/DD_HH:mm:ss'))
    console.table({
      pokemonNumber,
      generation,
      name,
      type,
      isEvolution,
      isRegion,
      isMega,
    })

    const changeNumber = []

    if (generation) {
      generation.forEach((item: string) => {
        changeNumber.push(parseInt(item, 10))
      })
    }

    const data = await prisma.pokemon.findMany({
      include: {
        NormalStats: true,
      },
      where: {
        number: pokemonNumber,
        generation: generation && {
          in: changeNumber,
        },
        name: {
          contains: name,
        },
        type: type && {
          hasEvery: type,
        },
        isEvolution,
        isMega,
        isRegion,
      },
      orderBy: [
        {
          number: 'asc',
        },
      ],
    })

    if (data) {
      return data
    } else {
      throw new Error('No data!!')
    }
  }

  /**
   * @author 장선규
   * @description 포켓몬 노말 폼
   * @param number 검색 노말 폼 조회
   * @returns {Promise<PokemonNormalForm[]>}
   */
  @Query(() => [PokemonNormalForm])
  @CacheControl({ maxAge: cacheTtl })
  public async getNormalForm(
    @Arg('number') number: number
  ): Promise<Array<PokemonNormalForm>> {
    const data = await prisma.pokemonNormalForm.findMany({
      where: {
        pokemonId: number,
      },
      include: {
        PokemonNormalFormAbilityList: true,
      },
      orderBy: {
        id: 'asc',
      },
    })

    if (data) {
      return data
    } else {
      throw new Error('No data!!')
    }
  }

  /**
   * @author 장선규
   * @description 기본 포켓몬 종족값
   * @returns {Promise<NormalStats[]>}
   */
  @Query(() => [NormalStats])
  @CacheControl({ maxAge: cacheTtl })
  public async getNormalStats(): Promise<NormalStats[]> {
    const data = await prisma.normalStats.findMany({
      orderBy: {
        pokemonId: 'asc',
      },
    })

    if (data) {
      return data
    } else if (data.length === 0) {
      return []
    } else {
      throw new Error('No Data!!')
    }
  }

  /**
   * @author 장선규
   * @description 단일 포켓몬 종족값
   * @returns {Promise<NormalStats>}
   */
  @Query(() => NormalStats)
  @CacheControl({ maxAge: cacheTtl })
  public async getSingleNormalStats(
    @Arg('id') id: number
  ): Promise<NormalStats> {
    const data = await prisma.normalStats.findFirst({
      where: {
        pokemonId: id,
      },
    })

    if (data) {
      return data
    } else {
      throw new Error('No Data!!')
    }
  }

  /**
   * @author 장선규
   * @description 메가진화 포켓몬 종족값
   * @returns {Promise<FormStats | MegaStats | RegionStats>}
   */
  @Query(() => FormStats || MegaStats || RegionStats)
  @CacheControl({ maxAge: cacheTtl })
  public async getPokemonStats(
    @Arg('type') type: 'mega' | 'form' | 'region',
    @Arg('statCode') statCode: string
  ): Promise<FormStats | MegaStats | RegionStats> {
    console.log(type, statCode)
    switch (type) {
      case 'form':
        return await prisma.formStats.findFirst({
          where: { statCode },
        })
      case 'region':
        return await prisma.regionStats.findFirst({
          where: { statCode },
        })
      case 'mega':
        return await prisma.megaStats.findFirst({
          where: { statCode },
        })
      default:
        throw new Error('No Data')
    }
  }
}

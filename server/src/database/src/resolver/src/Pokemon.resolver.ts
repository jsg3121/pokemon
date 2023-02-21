import { PrismaClient } from '@prisma/client'
import { Arg, Query, Resolver } from 'type-graphql'
import { Pokemon, PokemonMega, PokemonRegion } from '../../type-graphql'

const prisma = new PrismaClient()

@Resolver()
export default class PokemonResolver {
  /**
   * @author 장선규
   * @description 포켓몬 리스트 조회
   * @returns {Array<Pokemon>}
   */
  @Query(() => [Pokemon])
  public async getList(): Promise<Pokemon[]> {
    return await prisma.pokemon.findMany({ orderBy: [{ number: 'asc' }] })
  }

  /**
   * @author 장선규
   * @description 단일 포켓몬 정보 조회
   * @param number 포켓몬 번호
   * @returns {Pokemon}
   */
  @Query(() => Pokemon)
  public async getSinglePokemon(
    @Arg('number') number: number
  ): Promise<Pokemon> {
    return await prisma.pokemon.findUnique({
      where: {
        number,
      },
    })
  }

  /**
   * @author 장선규
   * @description 포켓몬 리전폼 정보 조회
   * @param number 포켓몬 번호
   * @returns {PokemonRegion}
   */
  @Query(() => PokemonRegion)
  public async getRegionForm(
    @Arg('number') number: number
  ): Promise<PokemonRegion | []> {
    const data = await prisma.pokemonRegion.findUnique({
      where: {
        id: number,
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
  @Query(() => PokemonMega)
  public async getMegaEvolution(
    @Arg('number') number: number
  ): Promise<PokemonMega> {
    const data = await prisma.pokemonMega.findUnique({
      where: {
        id: number,
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
  public async getPokemonFilter(
    @Arg('generation', () => [String], { nullable: true })
    generation: string[],
    @Arg('name', { nullable: true }) name: string,
    @Arg('isEvolution', { nullable: true }) isEvolution: boolean,
    @Arg('isRegion', { nullable: true }) isRegion: boolean,
    @Arg('isMega', { nullable: true }) isMega: boolean,
    @Arg('type', () => [String], { nullable: true })
    type: string[]
  ): Promise<Pokemon[]> {
    console.log(generation, name, type, isEvolution, isRegion, isMega)

    const changeNumber = []

    if (generation) {
      generation.forEach((item: string) => {
        changeNumber.push(parseInt(item, 10))
      })
    }

    const data = await prisma.pokemon.findMany({
      where: {
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
}

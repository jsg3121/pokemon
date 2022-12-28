import { PokemonTypes, TypesColor } from '../../types'

/**
 * info : 타입 정보 및 색상 설정
 * @param type string 데이터베이스 타입 한글
 * @returns type: 타입 정보, color: 타입 색상
 */
export const changeType = (type: string) => {
  switch (type) {
    case '노말':
      return {
        type: PokemonTypes.NORMAL,
        color: TypesColor.NORMAL,
      }
    case '불꽃':
      return {
        type: PokemonTypes.FIRE,
        color: TypesColor.FIRE,
      }
    case '물':
      return {
        type: PokemonTypes.WATER,
        color: TypesColor.WATER,
      }
    case '풀':
      return {
        type: PokemonTypes.GRASS,
        color: TypesColor.GRASS,
      }
    case '전기':
      return {
        type: PokemonTypes.ELECTRIC,
        color: TypesColor.ELECTRIC,
      }
    case '얼음':
      return {
        type: PokemonTypes.ICE,
        color: TypesColor.ICE,
      }
    case '격투':
      return {
        type: PokemonTypes.FIGHTING,
        color: TypesColor.FIGHTING,
      }
    case '독':
      return {
        type: PokemonTypes.POISON,
        color: TypesColor.POISON,
      }
    case '땅':
      return {
        type: PokemonTypes.GROUND,
        color: TypesColor.GROUND,
      }
    case '비행':
      return {
        type: PokemonTypes.FLYING,
        color: TypesColor.FLYING,
      }
    case '에스퍼':
      return {
        type: PokemonTypes.PSYCHIC,
        color: TypesColor.PSYCHIC,
      }
    case '벌레':
      return {
        type: PokemonTypes.BUG,
        color: TypesColor.BUG,
      }
    case '바위':
      return {
        type: PokemonTypes.ROCK,
        color: TypesColor.ROCK,
      }
    case '고스트':
      return {
        type: PokemonTypes.GHOST,
        color: TypesColor.GHOST,
      }
    case '드래곤':
      return {
        type: PokemonTypes.DRAGON,
        color: TypesColor.DRAGON,
      }
    case '악':
      return {
        type: PokemonTypes.DARK,
        color: TypesColor.DARK,
      }
    case '강철':
      return {
        type: PokemonTypes.STEEL,
        color: TypesColor.STEEL,
      }
    case '페어리':
      return {
        type: PokemonTypes.FAIRY,
        color: TypesColor.FAIRY,
      }

    default:
      return {
        type: '-',
        color: TypesColor.NORMAL,
      }
  }
}

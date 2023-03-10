import { IconTypes, TypesColor } from '../../types'

/**
 * info : 타입 정보 및 색상 설정
 * @param type string 데이터베이스 타입 한글
 * @returns type: 타입 정보, color: 타입 색상
 */
export const changeType = (type: string) => {
  switch (type) {
    case '노말':
      return {
        type: IconTypes.NORMAL,
        color: TypesColor.NORMAL,
      }
    case '불꽃':
      return {
        type: IconTypes.FIRE,
        color: TypesColor.FIRE,
      }
    case '물':
      return {
        type: IconTypes.WATER,
        color: TypesColor.WATER,
      }
    case '풀':
      return {
        type: IconTypes.GRASS,
        color: TypesColor.GRASS,
      }
    case '전기':
      return {
        type: IconTypes.ELECTRIC,
        color: TypesColor.ELECTRIC,
      }
    case '얼음':
      return {
        type: IconTypes.ICE,
        color: TypesColor.ICE,
      }
    case '격투':
      return {
        type: IconTypes.FIGHTING,
        color: TypesColor.FIGHTING,
      }
    case '독':
      return {
        type: IconTypes.POISON,
        color: TypesColor.POISON,
      }
    case '땅':
      return {
        type: IconTypes.GROUND,
        color: TypesColor.GROUND,
      }
    case '비행':
      return {
        type: IconTypes.FLYING,
        color: TypesColor.FLYING,
      }
    case '에스퍼':
      return {
        type: IconTypes.PSYCHIC,
        color: TypesColor.PSYCHIC,
      }
    case '벌레':
      return {
        type: IconTypes.BUG,
        color: TypesColor.BUG,
      }
    case '바위':
      return {
        type: IconTypes.ROCK,
        color: TypesColor.ROCK,
      }
    case '고스트':
      return {
        type: IconTypes.GHOST,
        color: TypesColor.GHOST,
      }
    case '드래곤':
      return {
        type: IconTypes.DRAGON,
        color: TypesColor.DRAGON,
      }
    case '악':
      return {
        type: IconTypes.DARK,
        color: TypesColor.DARK,
      }
    case '강철':
      return {
        type: IconTypes.STEEL,
        color: TypesColor.STEEL,
      }
    case '페어리':
      return {
        type: IconTypes.FAIRY,
        color: TypesColor.FAIRY,
      }

    default:
      return {
        type: '-',
        color: TypesColor.NORMAL,
      }
  }
}

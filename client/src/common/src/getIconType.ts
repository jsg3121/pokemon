import { IconColor, EngTypes } from '../../types'

/**
 * info : card 타입별 배경 아이콘
 * @param type card icon type
 * @returns type: 타입 정보, color:배경 색상
 */
export const getIconType = (type: string) => {
  switch (type) {
    case '노말':
      return {
        type: EngTypes.NORMAL,
        color: IconColor.NORMAL,
      }
    case '불꽃':
      return {
        type: EngTypes.FIRE,
        color: IconColor.FIRE,
      }
    case '물':
      return {
        type: EngTypes.WATER,
        color: IconColor.WATER,
      }
    case '풀':
      return {
        type: EngTypes.GRASS,
        color: IconColor.GRASS,
      }
    case '전기':
      return {
        type: EngTypes.ELECTRIC,
        color: IconColor.ELECTRIC,
      }
    case '얼음':
      return {
        type: EngTypes.ICE,
        color: IconColor.ICE,
      }
    case '격투':
      return {
        type: EngTypes.FIGHTING,
        color: IconColor.FIGHTING,
      }
    case '독':
      return {
        type: EngTypes.POISON,
        color: IconColor.POISON,
      }
    case '땅':
      return {
        type: EngTypes.GROUND,
        color: IconColor.GROUND,
      }
    case '비행':
      return {
        type: EngTypes.FLYING,
        color: IconColor.FLYING,
      }
    case '에스퍼':
      return {
        type: EngTypes.PSYCHIC,
        color: IconColor.PSYCHIC,
      }
    case '벌레':
      return {
        type: EngTypes.BUG,
        color: IconColor.BUG,
      }
    case '바위':
      return {
        type: EngTypes.ROCK,
        color: IconColor.ROCK,
      }
    case '고스트':
      return {
        type: EngTypes.GHOST,
        color: IconColor.GHOST,
      }
    case '드래곤':
      return {
        type: EngTypes.DRAGON,
        color: IconColor.DRAGON,
      }
    case '악':
      return {
        type: EngTypes.DARK,
        color: IconColor.DARK,
      }
    case '강철':
      return {
        type: EngTypes.STEEL,
        color: IconColor.STEEL,
      }
    case '페어리':
      return {
        type: EngTypes.FAIRY,
        color: IconColor.FAIRY,
      }

    default:
      return {
        type: '-',
        color: IconColor.NORMAL,
      }
  }
}

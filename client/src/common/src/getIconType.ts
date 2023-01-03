import { IconColor, IconTypes } from '../../types'

/**
 * info : card 타입별 배경 아이콘
 * @param type card icon type
 * @returns type: 타입 정보, color:배경 색상
 */
export const getIconType = (type: string) => {
  switch (type) {
    case '노말':
      return {
        type: IconTypes.NORMAL,
        color: IconColor.NORMAL,
      }
    case '불꽃':
      return {
        type: IconTypes.FIRE,
        color: IconColor.FIRE,
      }
    case '물':
      return {
        type: IconTypes.WATER,
        color: IconColor.WATER,
      }
    case '풀':
      return {
        type: IconTypes.GRASS,
        color: IconColor.GRASS,
      }
    case '전기':
      return {
        type: IconTypes.ELECTRIC,
        color: IconColor.ELECTRIC,
      }
    case '얼음':
      return {
        type: IconTypes.ICE,
        color: IconColor.ICE,
      }
    case '격투':
      return {
        type: IconTypes.FIGHTING,
        color: IconColor.FIGHTING,
      }
    case '독':
      return {
        type: IconTypes.POISON,
        color: IconColor.POISON,
      }
    case '땅':
      return {
        type: IconTypes.GROUND,
        color: IconColor.GROUND,
      }
    case '비행':
      return {
        type: IconTypes.FLYING,
        color: IconColor.FLYING,
      }
    case '에스퍼':
      return {
        type: IconTypes.PSYCHIC,
        color: IconColor.PSYCHIC,
      }
    case '벌레':
      return {
        type: IconTypes.BUG,
        color: IconColor.BUG,
      }
    case '바위':
      return {
        type: IconTypes.ROCK,
        color: IconColor.ROCK,
      }
    case '고스트':
      return {
        type: IconTypes.GHOST,
        color: IconColor.GHOST,
      }
    case '드래곤':
      return {
        type: IconTypes.DRAGON,
        color: IconColor.DRAGON,
      }
    case '악':
      return {
        type: IconTypes.DARK,
        color: IconColor.DARK,
      }
    case '강철':
      return {
        type: IconTypes.STEEL,
        color: IconColor.STEEL,
      }
    case '페어리':
      return {
        type: IconTypes.FAIRY,
        color: IconColor.FAIRY,
      }

    default:
      return {
        type: '-',
        color: IconColor.NORMAL,
      }
  }
}

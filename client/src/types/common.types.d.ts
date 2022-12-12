declare global {
  enum PokemonTypes {
    NORMAL = '노말',
    FIRE ='불',
    WATER = '물',
    GRASS = '풀',
    ELECTRIC = '전기',
    ICE = '얼음',
    FIGHTING = '격투',
    POISON = '독',
    GROUND = '땅',
    FLYING = '비행',
    PSYCHIC = '에스퍼',
    BUG = '벌레',
    ROCK = '바위',
    GHOST = '고스트',
    DRAGON = '드래곤',
    DARK = '악',
    STEEL = '강철',
    FAIRY = '페어리',
  }

  enum TypesColor {
    NORMAL = '#aea594',
    FIRE ='#f26b1d',
    WATER = '#0267c2',
    GRASS = '#389a02',
    ELECTRIC = '#fbb917',
    ICE = '#6dd3f5',
    FIGHTING = '#C03028',
    POISON = '#6b246e',
    GROUND = '#c9561c',
    FLYING = '#5d73d4',
    PSYCHIC = '#dc3165',
    BUG = '#88960e',
    ROCK = '#9e863d',
    GHOST = '#695582',
    DRAGON = '#4e3ba4',
    DARK = '#3c2d23',
    STEEL = '#8e8e9f',
    FAIRY = '#e08ee0',
  }
   
  enum TypeCompatibility {
    STRONG = 1,
    WEAK = -1,
    ZERO = 0
  }
}

export { };
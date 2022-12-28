import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Card as Cardd } from '../components'

export default {
  title: 'Component/Card',
  component: Cardd,
  argTypes: {
    pokemonNumber: {
      table: {
        disable: true,
      },
      defaultValue: 33,
    },
    type: {
      name: '타입',
      control: 'select',
      options: [
        '노말',
        '불꽃',
        '물',
        '풀',
        '전기',
        '얼음',
        '격투',
        '독',
        '땅',
        '비행',
        '에스퍼',
        '벌레',
        '바위',
        '고스트',
        '드래곤',
        '악',
        '강철',
        '페어리',
      ],
      defaultValue: '노말',
    },
    name: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Cardd>

const Template: ComponentStory<typeof Cardd> = (props) => {
  return <Cardd {...props} />
}

export const Normal = Template.bind({})
Normal.args = {
  type: '노말',
  pokemonNumber: 133,
  name: '이브이',
}

export const Fire = Template.bind({})
Fire.args = {
  type: '불꽃',
  pokemonNumber: 4,
  name: '파이리',
}

export const Water = Template.bind({})
Water.args = {
  type: '물',
  pokemonNumber: 7,
  name: '꼬부기',
}

export const Grass = Template.bind({})
Grass.args = {
  type: '풀',
  pokemonNumber: 152,
  name: '치코리타',
}

export const Electric = Template.bind({})
Electric.args = {
  type: '전기',
  pokemonNumber: 25,
  name: '피카츄',
}

export const Ice = Template.bind({})
Ice.args = {
  type: '얼음',
  pokemonNumber: 361,
  name: '눈꼬마',
}

export const Fighting = Template.bind({})
Fighting.args = {
  type: '격투',
  pokemonNumber: 447,
  name: '리오르',
}

export const Poison = Template.bind({})
Poison.args = {
  type: '독',
  pokemonNumber: 803,
  name: '베베놈',
}

export const Ground = Template.bind({})
Ground.args = {
  type: '땅',
  pokemonNumber: 104,
  name: '탕구리',
}

export const Flying = Template.bind({})
Flying.args = {
  type: '비행',
  pokemonNumber: 821,
  name: '파라꼬',
}

export const Psychic = Template.bind({})
Psychic.args = {
  type: '에스퍼',
  pokemonNumber: 151,
  name: '뮤',
}

export const Bug = Template.bind({})
Bug.args = {
  type: '벌레',
  pokemonNumber: 313,
  name: '볼비트',
}

export const Rock = Template.bind({})
Rock.args = {
  type: '바위',
  pokemonNumber: 744,
  name: '암멍이',
}

export const Ghost = Template.bind({})
Ghost.args = {
  type: '고스트',
  pokemonNumber: 200,
  name: '무우마',
}
export const Dragon = Template.bind({})
Dragon.args = {
  type: '드래곤',
  pokemonNumber: 147,
  name: '미뇽',
}
export const Dark = Template.bind({})
Dark.args = {
  type: '악',
  pokemonNumber: 197,
  name: '블래키',
}
export const Steel = Template.bind({})
Steel.args = {
  type: '강철',
  pokemonNumber: 808,
  name: '멜탄',
}
export const Fairy = Template.bind({})
Fairy.args = {
  type: '페어리',
  pokemonNumber: 35,
  name: '삐삐',
}

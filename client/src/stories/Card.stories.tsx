import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Card as Cardd } from '../components'

export default {
  title: 'Component/Card',
  component: Cardd,
  argTypes: {
    pokemonNumber: {
      defaultValue: 33,
    },
    type: {
      name: '타입',
      control: 'select',
      options: [
        '노말',
        '불',
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
  },
} as ComponentMeta<typeof Cardd>

const Template: ComponentStory<typeof Cardd> = (props) => {
  return <Cardd {...props} />
}

export const Normal = Template.bind({})
Normal.args = {
  type: '노말',
}

export const Fire = Template.bind({})
Fire.args = {
  type: '불',
}

export const Water = Template.bind({})
Water.args = {
  type: '물',
}

export const Grass = Template.bind({})
Grass.args = {
  type: '풀',
}

export const Electric = Template.bind({})
Electric.args = {
  type: '전기',
}

export const Ice = Template.bind({})
Ice.args = {
  type: '얼음',
}

export const Fighting = Template.bind({})
Fighting.args = {
  type: '격투',
}

export const Poison = Template.bind({})
Poison.args = {
  type: '독',
}

export const Ground = Template.bind({})
Ground.args = {
  type: '땅',
}

export const Flying = Template.bind({})
Flying.args = {
  type: '비행',
}

export const Psychic = Template.bind({})
Psychic.args = {
  type: '에스퍼',
}

export const Bug = Template.bind({})
Bug.args = {
  type: '벌레',
}

export const Rock = Template.bind({})
Rock.args = {
  type: '바위',
}

export const Ghost = Template.bind({})
Ghost.args = {
  type: '고스트',
}
export const Dragon = Template.bind({})
Dragon.args = {
  type: '드래곤',
}
export const Dark = Template.bind({})
Dark.args = {
  type: '악',
}
export const Steel = Template.bind({})
Steel.args = {
  type: '강철',
}
export const Fairy = Template.bind({})
Fairy.args = {
  type: '페어리',
}

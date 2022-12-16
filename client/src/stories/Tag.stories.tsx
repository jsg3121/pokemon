import { Tag } from '../components'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Component/Type',
  component: Tag,
  argTypes: {
    label: {
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
    },
  },
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (props) => {
  return <Tag {...props} />
}

export const Normal = Template.bind({})
Normal.args = {
  label: '노말',
}

export const Fire = Template.bind({})
Fire.args = {
  label: '불',
}

export const Water = Template.bind({})
Water.args = {
  label: '물',
}

export const Grass = Template.bind({})
Grass.args = {
  label: '풀',
}

export const Electric = Template.bind({})
Electric.args = {
  label: '전기',
}

export const Ice = Template.bind({})
Ice.args = {
  label: '얼음',
}

export const Fighting = Template.bind({})
Fighting.args = {
  label: '격투',
}

export const Poison = Template.bind({})
Poison.args = {
  label: '독',
}

export const Ground = Template.bind({})
Ground.args = {
  label: '땅',
}

export const Flying = Template.bind({})
Flying.args = {
  label: '비행',
}

export const Psychic = Template.bind({})
Psychic.args = {
  label: '에스퍼',
}

export const Bug = Template.bind({})
Bug.args = {
  label: '벌레',
}

export const Rock = Template.bind({})
Rock.args = {
  label: '바위',
}

export const Ghost = Template.bind({})
Ghost.args = {
  label: '고스트',
}
export const Dragon = Template.bind({})
Dragon.args = {
  label: '드래곤',
}
export const Dark = Template.bind({})
Dark.args = {
  label: '악',
}
export const Steel = Template.bind({})
Steel.args = {
  label: '강철',
}
export const Fairy = Template.bind({})
Fairy.args = {
  label: '페어리',
}

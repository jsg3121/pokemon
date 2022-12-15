import { Tag } from '../components'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Component/Tag',
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

const Template: ComponentStory<typeof Tag> = () => {
  return <Tag label="노말" />
}

export const Normal = Template.bind({})
Normal.args = {
  label: '노말',
}

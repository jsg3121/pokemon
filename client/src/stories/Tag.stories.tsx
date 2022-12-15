import { Tag } from '../components'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Component/Tag',
  component: Tag,
  argTypes: {},
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = () => {
  return <Tag label="노말" />
}

export const Normal = Template.bind({})
Normal.args = {
  label: '노말',
}

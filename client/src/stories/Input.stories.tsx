import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Input } from '../components'

export default {
  title: 'Component/Input',
  component: Input,
  argTypes: {
    status: {
      name: '입력 상태',
      control: 'select',
      options: ['default', 'danger', 'waring', undefined],
    },
    type: {
      name: '입력 타입',
      control: 'radio',
      options: ['text', 'password'],
    },
    defaultValue: {
      defaultValue: 'input value',
    },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (props) => {
  return <Input {...props} />
}

export const Text = Template.bind({})
Text.args = {
  defaultValue: 'text',
  type: 'text',
  status: undefined,
}

export const Default = Template.bind({})
Default.args = {
  defaultValue: 'default status',
  type: 'text',
  status: 'default',
}

export const Waring = Template.bind({})
Waring.args = {
  defaultValue: 'waring status',
  type: 'text',
  status: 'waring',
}

export const Danger = Template.bind({})
Danger.args = {
  defaultValue: 'danger status',
  type: 'text',
  status: 'danger',
}

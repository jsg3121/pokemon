import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Input } from '../components'

export default {
  title: 'Component/Input',
  component: Input,
} as ComponentMeta<typeof Input>

export const Template: ComponentStory<typeof Input> = (props) => {
  return <Input {...props} />
}

const Text = Template.bind({})
Text.args = {
  defaultValue: 'text',
  type: 'text',
}

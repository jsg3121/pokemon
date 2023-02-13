import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Checkbox } from '../components'

export default {
  title: 'Component/Checkbox',
  component: Checkbox,
  argTypes: {
    onChecked: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (props) => {
  return <Checkbox {...props}></Checkbox>
}

export const Default = Template.bind({})
Default.args = {
  value: 'default',
  label: 'Default',
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}

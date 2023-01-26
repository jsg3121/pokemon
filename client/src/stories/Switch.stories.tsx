import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Switch } from '../components'

export default {
  title: 'Component/Switch',
  component: Switch,
  argTypes: {
    defaultValue: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Switch>

const Template: ComponentStory<typeof Switch> = (props) => {
  return <Switch {...props} />
}

export const Default = Template.bind({})
Default.args = {
  name: 'default',
  disabled: false,
}

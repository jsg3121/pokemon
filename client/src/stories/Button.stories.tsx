import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from '../components'

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    onClick: {
      table: {
        disable: true,
      },
    },
    buttonType: {
      name: '버튼 타입',
      control: 'select',
      options: ['default', 'danger', 'waring'],
      defaultValue: 'default',
    },
    value: {
      defaultValue: 'Button',
      type: 'string',
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (props) => {
  return <Button {...props} />
}

export const Default = Template.bind({})
Default.args = {
  buttonType: 'default',
}

export const Danger = Template.bind({})
Danger.args = {
  buttonType: 'danger',
}

export const Waring = Template.bind({})
Waring.args = {
  buttonType: 'waring',
}

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Card as Cardd } from '../components'

export default {
  title: 'Component/Card',
  component: Cardd,
  argTypes: {},
} as ComponentMeta<typeof Cardd>

const Template: ComponentStory<typeof Cardd> = (props) => {
  return <Cardd {...props} />
}

export const Card = Template.bind({})
Card.args = {}

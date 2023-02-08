import { ComponentMeta, ComponentStory } from '@storybook/react'
import styled from 'styled-components'
import { Radio } from '../components'

export default {
  title: 'Component/Radio',
  component: Radio,
  argTypes: {
    onChecked: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Radio>

const Group = styled.div`
  display: flex;
  align-items: center;
`

const Template: ComponentStory<typeof Radio> = (props) => {
  return (
    <Group>
      <Radio {...props} value={'value1'} label={'value1'} />
      <Radio {...props} value={'value2'} label={'value2'} />
      <Radio {...props} value={'value3'} label={'value3'} />
    </Group>
  )
}

export const Default = Template.bind({})
Default.args = {
  name: 'default',
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}

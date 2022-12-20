import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Modal } from '../components'

export default {
  title: 'Component/Modal',
  component: Modal,
  argTypes: {
    onConfirm: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (props) => {
  return <Modal {...props} />
}

export const Default = Template.bind({})
Default.args = {
  title: 'Title',
  description: 'Modal description',
  modalType: 'default',
}

export const Waring = Template.bind({})
Waring.args = {
  title: 'Waring Title',
  description: 'Modal description',
  modalType: 'waring',
}

export const Danger = Template.bind({})
Danger.args = {
  title: 'dnager Title',
  description: 'Modal description',
  modalType: 'danger',
}

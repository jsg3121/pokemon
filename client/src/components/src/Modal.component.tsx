import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'
import ButtonComponent from './Button.component'

interface ModalComponentProps {
  title: string
  description: string
  onConfirm?: () => void
  onCancel?: () => void
  modalType: 'waring' | 'default' | 'danger'
}

const Modal = styled.article<{ modalType: 'waring' | 'default' | 'danger' }>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);

  & > div {
    width: 30rem;
    padding: 1.5rem;
    background-color: #ffffff;
    border-radius: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h1 {
      font-size: 1.75rem;
      font-weight: bold;
      padding-bottom: 0.5rem;
      border-bottom: ${(props) => {
        switch (props.modalType) {
          case 'default':
            return '1px solid #4797f8'
          case 'danger':
            return '1px solid #f84424'
          case 'waring':
            return '1px solid #f5b62e'
        }
      }};
      margin: 0 0 2rem;
    }
    p {
      font-size: 1.2rem;
      font-weight: 500;
    }
  }

  .modal--btn {
    margin: 3rem 0 0;
    padding-top: 1rem;
    text-align: right;

    button {
      margin-right: 0.5rem;

      &:last-child {
        margin: 0;
      }
    }
  }
`

const ModalComponent: React.FC<ModalComponentProps> = (props) => {
  const { title, description, modalType, onConfirm, onCancel } = props

  const handleClick = React.useCallback(() => {
    if (onConfirm) {
      onConfirm()
    }
  }, [onConfirm])

  const handleCancel = React.useCallback(() => {
    if (onCancel) {
      onCancel()
    }
  }, [onCancel])

  return (
    <Modal modalType={modalType}>
      <div>
        <div>
          <h1>{title}</h1>
        </div>
        <div>
          <p>{description}</p>
        </div>
        <div className="modal--btn">
          {modalType === 'default' && (
            <>
              <ButtonComponent
                buttonType="default"
                onClick={handleClick}
                value="OK"
              />
              <ButtonComponent
                buttonType="gray"
                onClick={handleCancel}
                value="Cancle"
              />
            </>
          )}
          {(modalType === 'waring' || modalType === 'danger') && (
            <>
              <ButtonComponent
                buttonType={modalType}
                onClick={handleClick}
                value="OK"
              />
            </>
          )}
        </div>
      </div>
    </Modal>
  )
}

export default React.memo(ModalComponent, isEqual)

import React from 'react'
import isEqual from 'fast-deep-equal'
import styled from 'styled-components'
import ButtonComponent from './Button.component'

interface ModalComponentProps {
  title: string
  description: string | React.ReactNode
  onConfirm?: () => void
  onCancel?: () => void
  modalType: 'waring' | 'default' | 'danger'
}

const Modal = styled.article<{ modalType: 'waring' | 'default' | 'danger' }>`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;

  & > .modal__content {
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
      color: #333333;
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
      margin: 0 0 1rem;
    }
  }

  .modal--btn {
    margin: 0;
    padding-top: 1rem;
    text-align: right;

    button {
      margin-right: 0.5rem;

      &:last-child {
        margin: 0;
      }
    }
  }

  @media screen and (max-width: 475px) {
    height: calc(var(--vh, 1vh) * 100);

    & > .modal__content {
      width: 85vw;
    }
  }
`

const ModalComponent: React.FC<ModalComponentProps> = (props) => {
  const { title, description, modalType, onConfirm, onCancel } = props

  const handleClickOK = React.useCallback(() => {
    if (onConfirm) {
      onConfirm()
    }
  }, [onConfirm])

  const handleClickCancel = React.useCallback(() => {
    if (onCancel) {
      onCancel()
    }
  }, [onCancel])

  return (
    <Modal modalType={modalType}>
      <div className="modal__content">
        <div>
          <h1>{title}</h1>
        </div>
        <div>{description}</div>
        <div className="modal--btn">
          {modalType === 'default' && (
            <>
              <ButtonComponent
                buttonType="default"
                onClick={handleClickOK}
                label="확인"
              />
              <ButtonComponent
                buttonType="gray"
                onClick={handleClickCancel}
                label="취소"
              />
            </>
          )}
          {(modalType === 'waring' || modalType === 'danger') && (
            <>
              <ButtonComponent
                buttonType={modalType}
                onClick={handleClickOK}
                label="OK"
              />
            </>
          )}
        </div>
      </div>
    </Modal>
  )
}

export default React.memo(ModalComponent, isEqual)

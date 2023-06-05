import isEqual from 'fast-deep-equal'
import { observer } from 'mobx-react'
import React from 'react'
import styled from 'styled-components'
import { ReactComponent as SettingIcon } from '../../../../assets/image/setting.svg'
import { Modal, Switch } from '../../../../components'
import { SettingContext } from '../../../../context'
import Links from './Links.container'

interface SettingContainerProps {}

const Setting = styled.button`
  height: 3rem;
  width: 3rem;
  padding: 0.25rem;
  cursor: pointer;
`

const Option = styled.div`
  .option__list {
    height: 8rem;
    margin-bottom: 2rem;

    .option__item {
      display: flex;
      align-items: center;
      width: 100%;
      height: 3rem;
    }

    @media screen and (max-width: 475px) {
      height: 7rem;
      margin-bottom: 0.75rem;
    }
  }

  .item__description {
    margin-left: 0.5rem;
  }

  .option__links {
    font-size: 1.1rem;
    font-weight: 500;
    margin: 2rem 0 1rem;

    @media screen and (max-width: 475px) {
      margin: 0.75rem 0;
    }
  }
`

const SettingContainer: React.FC<SettingContainerProps> = observer((props) => {
  const [isShow, setIsShow] = React.useState<boolean>(false)
  const { changeOptions, saveSetting, cancelSetting, isSave } =
    React.useContext(SettingContext)

  const handleConfirm = React.useCallback(() => {
    if (saveSetting) {
      setIsShow(false)
      saveSetting()
    }
  }, [saveSetting])

  const handleCancel = React.useCallback(() => {
    if (cancelSetting) {
      cancelSetting()
    }
    setIsShow(false)
  }, [cancelSetting])

  const handleClickIcon = React.useCallback(() => {
    setIsShow(true)
  }, [])

  const handleChangeOptions = React.useCallback(
    (data: { name: string; value: boolean }) => {
      if (changeOptions) {
        changeOptions(data.value)
      }
    },
    [changeOptions]
  )

  const options = React.useMemo(() => {
    return (
      <Option>
        <ul className="option__list">
          <li className="option__item">
            <Switch
              name="isSave"
              onChange={handleChangeOptions}
              value={isSave}
            />
            <p className="item__description">검색 조건을 저장합니다.</p>
          </li>
        </ul>
        <hr />
        <p className="option__links">추가 링크</p>
        <Links />
      </Option>
    )
  }, [handleChangeOptions, isSave])

  return (
    <>
      <Setting onClick={handleClickIcon} aria-label="setting button">
        <SettingIcon />
      </Setting>
      {isShow && (
        <Modal
          description={options}
          modalType="default"
          title="설정"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </>
  )
})
export default React.memo(SettingContainer, isEqual)

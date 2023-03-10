import React from 'react'
import isEqual from 'fast-deep-equal'
import { DetailContext } from '../../../../context'
import styled from 'styled-components'
import { RadioGroup, Switch } from '../../../../components'

interface SwitchsContainerProps {}

const Switchs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .image__switch {
    width: 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 1.3rem;
      font-weight: 500;
    }
  }

  .switch__other-info {
    display: flex;
    align-items: center;

    p {
      font-size: 1.3rem;
      font-weight: 500;
      margin-right: 0.75rem;
    }
  }
`

const otherList = [
  { label: '기본', value: 'normal' },
  { label: '메가진화', value: 'mega' },
  { label: '리전폼', value: 'region' },
]

const SwitchsContainer: React.FC<SwitchsContainerProps> = (props) => {
  const { detailInfo, setShiny, onOtherInfoChange } =
    React.useContext(DetailContext)

  const handleChange = React.useCallback(() => {
    if (setShiny) {
      setShiny()
    }
  }, [setShiny])

  const handleSelect = React.useCallback(
    (data: { name: string; value: string }) => {
      if (data.name && onOtherInfoChange) {
        onOtherInfoChange(data.value)
      }
    },
    [onOtherInfoChange]
  )

  const handleMegaChange = React.useCallback(
    (data: { name: string; value: boolean }) => {
      if (onOtherInfoChange) {
        if (data.value) {
          onOtherInfoChange(data.name)
        } else {
          onOtherInfoChange('normal')
        }
      }
    },
    [onOtherInfoChange]
  )

  return (
    <Switchs>
      <div className="image__switch">
        <p>이로치</p>
        <Switch name="detail_image" onChange={handleChange} />
      </div>
      <div className="switch__other-info">
        {detailInfo && !detailInfo.isMega && detailInfo.isRegion && (
          <>
            <p>리전폼</p>
            <Switch name="region" onChange={handleMegaChange} />
          </>
        )}
        {detailInfo && detailInfo.isMega && !detailInfo.isRegion && (
          <>
            <p>메가진화</p>
            <Switch name="mega" onChange={handleMegaChange} />
          </>
        )}
        {detailInfo && detailInfo.isMega && detailInfo.isRegion && (
          <RadioGroup
            name="otherInfo"
            onSelect={handleSelect}
            options={otherList}
          />
        )}
      </div>
    </Switchs>
  )
}

export default React.memo(SwitchsContainer, isEqual)

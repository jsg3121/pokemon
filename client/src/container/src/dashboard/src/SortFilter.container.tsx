import isEqual from 'fast-deep-equal'
import React from 'react'
import styled from 'styled-components'
import { RadioGroup } from '../../../../components'
import { ReactComponent as SortIcon } from '../../../../assets/image/sort.svg'

const SortFilter = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 2rem;
  position: relative;
  border-bottom: 1px solid #dddddd;

  .sort__title {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;

    & > p {
      text-align: left;
      line-height: 1rem;
      margin-left: 0.5rem;
    }

    padding: 0.5rem;
  }

  .sort__pop {
    width: ${({ isOpen }) => {
      return isOpen ? '32rem' : 0
    }};
    height: ${({ isOpen }) => {
      return isOpen ? '12rem' : 0
    }};
    background-color: #ffffff;
    border-radius: 10px;
    position: absolute;
    top: 2.5rem;
    left: 1rem;
    transition: height 0.3s, width 0.3s;
    overflow: hidden;
    z-index: 1000;

    .sort__popt--radios {
      width: 32rem;
      height: 12rem;
      padding: 1rem;
      border: 1px solid #333333;
      border-radius: 10px;
    }
  }
`

const RadioOptions = [
  { label: '도감번호 높은순', value: 'number desc' },
  { label: '도감번호 낮은순', value: 'number asc' },
  { label: '체력 높은순', value: 'hp desc' },
  { label: '체력 낮은순', value: 'hp asc' },
  { label: '공격 높은순', value: 'attack desc' },
  { label: '공격 낮은순', value: 'attack asc' },
  { label: '방어 높은순', value: 'defense desc' },
  { label: '방어 낮은순', value: 'defense asc' },
  { label: '특수공격 높은순', value: 'special-attack desc' },
  { label: '특수공격 낮은순', value: 'special-attack asc' },
  { label: '특수방어 높은순', value: 'special-defense desc' },
  { label: '특수방어 낮은순', value: 'special-defense asc' },
  { label: '스피드 높은순', value: 'speed desc' },
  { label: '스피드 낮은순', value: 'speed asc' },
]

const SortFilterContainer: React.FC = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false)

  const handleClick = React.useCallback(() => {
    setOpen((val) => !val)
  }, [])

  const handleSelect = React.useCallback(() => {}, [])

  return (
    <SortFilter onClick={handleClick} isOpen={isOpen}>
      <div className="sort__title">
        <SortIcon fill={isOpen ? '#3471cd' : '#5c9dff'} />
        <p>정렬 조건</p>
      </div>
      <div className="sort__pop">
        <div className="sort__popt--radios">
          <RadioGroup
            title="정렬 방법"
            name="sortList"
            options={RadioOptions}
            onSelect={handleSelect}
          />
        </div>
      </div>
    </SortFilter>
  )
}

export default React.memo(SortFilterContainer, isEqual)

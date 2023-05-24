import isEqual from 'fast-deep-equal'
import React from 'react'
import styled from 'styled-components'
import { ReactComponent as SortIcon } from '../../../../assets/image/sort.svg'
import { RadioGroup } from '../../../../components'
import { useMobxStore } from '../../../../hook'

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
    justify-content: space-between;
    padding: 0.5rem;

    & > div {
      display: flex;
      align-items: center;
      cursor: pointer;

      & > p {
        text-align: left;
        line-height: 1rem;
        margin-left: 0.5rem;
      }
    }

    & > span {
      font-size: 0.9rem;
      color: #aaaaaa;
    }
  }

  .sort__pop {
    width: ${({ isOpen }) => {
      return isOpen ? '32rem' : 0
    }};
    height: ${({ isOpen }) => {
      return isOpen ? '16rem' : 0
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
      height: 16rem;
      padding: 1rem;
      border: 1px solid #333333;
      border-radius: 10px;

      .radio__item {
        grid-template-columns: repeat(2, auto);
        grid-row-gap: 1px;
      }
    }
  }

  @media screen and (max-width: 475px) {
    background-color: #ffffff;
    width: 100%;
    border-bottom: 0;

    .sort__pop {
      width: 100%;
      height: ${({ isOpen }) => {
        return isOpen ? '16rem' : 0
      }};
      left: 0;

      .sort__popt--radios {
        width: 100%;
      }
    }
  }
`

const RadioOptions = [
  { label: '도감번호 낮은순', value: 'number asc' },
  { label: '도감번호 높은순', value: 'number desc' },
  { label: '체력 낮은순', value: 'hp asc' },
  { label: '체력 높은순', value: 'hp desc' },
  { label: '공격 낮은순', value: 'attack asc' },
  { label: '공격 높은순', value: 'attack desc' },
  { label: '방어 낮은순', value: 'defense asc' },
  { label: '방어 높은순', value: 'defense desc' },
  { label: '특수공격 낮은순', value: 'specialAttack asc' },
  { label: '특수공격 높은순', value: 'specialAttack desc' },
  { label: '특수방어 낮은순', value: 'specialDefense asc' },
  { label: '특수방어 높은순', value: 'specialDefense desc' },
  { label: '스피드 낮은순', value: 'speed asc' },
  { label: '스피드 높은순', value: 'speed desc' },
  { label: '전체 종족값 낮은순', value: 'total asc' },
  { label: '전체 종족값 높은순', value: 'total desc' },
]

const SortFilterContainer: React.FC = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false)
  const { pokemonList } = useMobxStore()

  const handleClick = React.useCallback(() => {
    setOpen((val) => !val)
  }, [])

  const handleSelect = React.useCallback(
    (data: { name: string; value: string }) => {
      pokemonList.sortPokemon(data)
      setOpen(false)
    },
    []
  )

  React.useEffect(() => {
    pokemonList.sortPokemon({ name: '도감번호 낮은순', value: 'number asc' })
  }, [])

  return (
    <SortFilter isOpen={isOpen}>
      <div className="sort__title" onClick={handleClick}>
        <div>
          <SortIcon fill={isOpen ? '#3471cd' : '#5c9dff'} />
          <p>정렬 조건</p>
        </div>
        <span>{pokemonList.nowSorting}</span>
      </div>
      <div className="sort__pop">
        <div className="sort__popt--radios">
          <RadioGroup
            title="정렬 방법"
            name="sortList"
            options={RadioOptions}
            onSelect={handleSelect}
            defaultValue="number asc"
          />
        </div>
      </div>
    </SortFilter>
  )
}

export default React.memo(SortFilterContainer, isEqual)

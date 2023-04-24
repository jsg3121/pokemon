import React from 'react'
import styled from 'styled-components'
import { Button } from '../../components'
import { useMobxStore } from '../../hook'
import { Generations, Radio, Search, Types } from './filter'

const Filter = styled.article`
  width: 20rem;
  height: 100vh;
  border-right: 1px solid #333333;
  position: fixed;
  left: 0;
  top: 5rem;
  background-color: #ffffff;
  transition: transform 0.3s;
  will-change: transform;

  .btn__reset {
    width: 100%;
    padding: 1rem 1rem 0 1rem;
    text-align: right;

    button {
      width: 100%;
    }
  }

  .filter__content--title {
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #333333;
  }

  .filter__button--mobile {
    display: none;
  }

  @media screen and (max-width: 475px) {
    width: 100%;
    height: calc(100vh - 3.5rem);
    top: 3.5rem;
    padding: 0;
    border-right: 0;
    transform: translate(-100%, 0);

    .btn__reset {
      display: none;
    }

    .filter__button--mobile {
      width: 100%;
      display: block;
      padding: 0 1rem;
      position: absolute;
      bottom: 0;
      background-color: #ffffff;
      z-index: 100;

      button {
        width: 100%;
        margin-bottom: 1rem;
      }
    }
  }

  &.close {
    transform: translate(-100%, 0);
  }

  &.open {
    transform: translate(0, 0);
  }
`

const FilterContainer: React.FC = () => {
  const { filter } = useMobxStore()
  const filterRef = React.useRef<HTMLElement>(null)

  const handleClick = React.useCallback(() => {
    filter.clear()
  }, [filter])

  const handleClose = React.useCallback(() => {
    if (filterRef.current) {
      document.getElementsByTagName('body')[0].style.overflow = 'auto'
      filterRef.current.classList.remove('open')
      filterRef.current.classList.add('close')
    }
  }, [])

  const handleReset = React.useCallback(() => {
    if (filterRef.current) {
      filter.clear()
      document.getElementsByTagName('body')[0].style.overflow = 'auto'
      filterRef.current.classList.remove('open')
      filterRef.current.classList.add('close')
    }
  }, [filter])

  return (
    <Filter className="filter" ref={filterRef}>
      <div className="btn__reset">
        <Button label="검색 초기화" onClick={handleClick} buttonType="waring" />
      </div>
      <Search />
      <Types />
      <Generations />
      <Radio />
      <div className="filter__button--mobile">
        <Button label="검색" onClick={handleClose} buttonType="default" />
        <Button label="검색 초기화" onClick={handleReset} buttonType="waring" />
        <Button label="필터 닫기" onClick={handleClose} buttonType="gray" />
      </div>
    </Filter>
  )
}

export default FilterContainer

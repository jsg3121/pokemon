import isEqual from 'fast-deep-equal'
import React from 'react'
import styled from 'styled-components'
import { Button, Image } from '../../../../components'
import { useMobxStore } from '../../../../hook'

interface NoticeContainerProps {
  onClick: () => void
}

const Notice = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-self: flex-start;
  grid-column: 1 / 4;

  .card--icon {
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;

    & > div {
      width: 5.5rem;
      height: 1rem;
      display: flex;
      justify-content: flex-end;

      p {
        margin-left: 0.5rem;
        line-height: 1.2;
      }
    }
  }

  button {
    flex-shrink: 0;
    margin-left: 0.5rem;
  }

  @media screen and (min-width: 476px) {
    display: none;
  }

  @media screen and (max-width: 475px) {
    padding: 0 1rem;
    margin-bottom: 0.5rem;
  }
`

const NoticeContainer: React.FC<NoticeContainerProps> = (props) => {
  const { onClick } = props
  const { filter } = useMobxStore()

  const handleFilterOpen = React.useCallback(() => {
    onClick()
  }, [onClick])

  const handleReset = React.useCallback(() => {
    filter.clear()
  }, [filter])

  return (
    <Notice>
      <div className="card--icon">
        <div>
          <Image>
            <img
              src={require('../../../../assets/image/mega.webp')}
              alt="메가진화_아이콘"
            />
          </Image>
          <p>메가진화</p>
        </div>
        <div>
          <Image>
            <img
              src={require('../../../../assets/image/regionForm.webp')}
              alt="리전폼_아이콘"
            />
          </Image>
          <p>리전폼</p>
        </div>
      </div>
      <Button label="검색 초기화" buttonType="waring" onClick={handleReset} />
      <Button label="필터" buttonType="default" onClick={handleFilterOpen} />
    </Notice>
  )
}

export default React.memo(NoticeContainer, isEqual)
